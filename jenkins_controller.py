#!/usr/bin/env python3

import jenkins
import sys
import argparse
from typing import Dict, List, Optional
from datetime import datetime

class JenkinsController:
    def __init__(self, url: str, username: str, api_token: str):
        """
        Initialize Jenkins controller with connection details
        
        Args:
            url: Jenkins server URL
            username: Jenkins username
            api_token: Jenkins API token
        """
        try:
            self.server = jenkins.Jenkins(
                url,
                username=username,
                password=api_token
            )
            # Test connection
            self.server.get_whoami()
            print(f"Successfully connected to Jenkins at {url}")
        except jenkins.JenkinsException as e:
            print(f"Failed to connect to Jenkins: {str(e)}")
            sys.exit(1)

    def list_jobs(self) -> List[Dict]:
        """
        Get list of all jobs with their details
        
        Returns:
            List of dictionaries containing job information
        """
        try:
            jobs = self.server.get_jobs()
            return jobs
        except jenkins.JenkinsException as e:
            print(f"Failed to get jobs: {str(e)}")
            return []

    def get_job_status(self, job_name: str) -> Optional[Dict]:
        """
        Get status of the latest build for a specific job
        
        Args:
            job_name: Name of the Jenkins job
            
        Returns:
            Dictionary containing build information or None if failed
        """
        try:
            job_info = self.server.get_job_info(job_name)
            if not job_info['builds']:
                print(f"No builds found for job: {job_name}")
                return None

            latest_build = job_info['builds'][0]
            build_info = self.server.get_build_info(job_name, latest_build['number'])
            
            return {
                'job_name': job_name,
                'build_number': latest_build['number'],
                'status': build_info['result'],
                'timestamp': datetime.fromtimestamp(build_info['timestamp']/1000).strftime('%Y-%m-%d %H:%M:%S'),
                'duration': f"{build_info['duration']/1000:.2f} seconds"
            }
        except jenkins.JenkinsException as e:
            print(f"Failed to get job status: {str(e)}")
            return None

    def trigger_job(self, job_name: str, parameters: Dict = None) -> bool:
        """
        Trigger a Jenkins job with optional parameters
        
        Args:
            job_name: Name of the Jenkins job
            parameters: Dictionary of job parameters (optional)
            
        Returns:
            True if job was triggered successfully, False otherwise
        """
        try:
            if parameters:
                self.server.build_job(job_name, parameters=parameters)
            else:
                self.server.build_job(job_name)
            print(f"Successfully triggered job: {job_name}")
            return True
        except jenkins.JenkinsException as e:
            print(f"Failed to trigger job: {str(e)}")
            return False

def main():
    parser = argparse.ArgumentParser(description='Jenkins Controller')
    parser.add_argument('--url', required=True, help='Jenkins server URL')
    parser.add_argument('--username', required=True, help='Jenkins username')
    parser.add_argument('--api-token', required=True, help='Jenkins API token')
    parser.add_argument('--action', required=True, choices=['list', 'status', 'trigger'],
                      help='Action to perform')
    parser.add_argument('--job-name', help='Name of the Jenkins job')
    parser.add_argument('--parameters', help='Job parameters in JSON format')

    args = parser.parse_args()

    # Initialize Jenkins controller
    controller = JenkinsController(args.url, args.username, args.api_token)

    # Perform requested action
    if args.action == 'list':
        jobs = controller.list_jobs()
        print("\nAvailable Jobs:")
        for job in jobs:
            print(f"- {job['name']} ({job['color']})")

    elif args.action == 'status':
        if not args.job_name:
            print("Error: --job-name is required for status action")
            sys.exit(1)
        
        status = controller.get_job_status(args.job_name)
        if status:
            print("\nJob Status:")
            for key, value in status.items():
                print(f"{key}: {value}")

    elif args.action == 'trigger':
        if not args.job_name:
            print("Error: --job-name is required for trigger action")
            sys.exit(1)
        
        parameters = None
        if args.parameters:
            try:
                import json
                parameters = json.loads(args.parameters)
            except json.JSONDecodeError:
                print("Error: Invalid JSON format for parameters")
                sys.exit(1)
        
        controller.trigger_job(args.job_name, parameters)

if __name__ == "__main__":
    main() 