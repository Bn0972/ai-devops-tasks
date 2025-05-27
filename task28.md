**Installation:**
```bash
pip install python-jenkins
```

**Usage Examples:**

1. **List all jobs:**
```bash
python jenkins_controller.py --url "http://jenkins.example.com" --username "your-username" --api-token "your-token" --action list
```

2. **Check job status:**
```bash
python jenkins_controller.py --url "http://jenkins.example.com" --username "your-username" --api-token "your-token" --action status --job-name "my-job"
```

3. **Trigger a job:**
```bash
python jenkins_controller.py --url "http://jenkins.example.com" --username "your-username" --api-token "your-token" --action trigger --job-name "my-job" --parameters '{"param1": "value1"}'
```

**Key Features:**

1. **Authentication:**
   - Secure connection using username and API token
   - Connection testing on initialization
   - Error handling for authentication failures

2. **Job Management:**
   - List all available jobs
   - Get detailed status of latest builds
   - Trigger jobs with optional parameters

3. **Error Handling:**
   - Comprehensive exception handling
   - Informative error messages
   - Graceful failure handling

4. **Type Hints:**
   - Full type annotations for better code maintainability
   - Clear function signatures
   - Documentation for all methods

**Security Features:**

1. **API Token Usage:**
   - Uses API tokens instead of passwords
   - Secure credential handling
   - No hardcoded credentials

2. **Input Validation:**
   - Parameter validation
   - JSON format checking
   - Required field validation

**Error Handling Examples:**

1. **Connection Error:**
```python
try:
    self.server.get_whoami()
except jenkins.JenkinsException as e:
    print(f"Failed to connect to Jenkins: {str(e)}")
    sys.exit(1)
```

2. **Job Status Error:**
```python
try:
    job_info = self.server.get_job_info(job_name)
except jenkins.JenkinsException as e:
    print(f"Failed to get job status: {str(e)}")
    return None
```



I'll explain how the script works, its dependencies, and provide example commands.

**Script Overview:**

The script uses the `python-jenkins` library to interact with Jenkins API. Here's a breakdown of its components:

1. **Dependencies:**
```python
import jenkins        # Main library for Jenkins API interaction
import sys           # System-specific parameters and functions
import argparse      # Command-line argument parsing
from typing import Dict, List, Optional  # Type hints
from datetime import datetime  # Date/time handling
```

2. **Main Class: JenkinsController**
   - Handles all Jenkins API interactions
   - Manages authentication and connection
   - Provides methods for job operations

**Key Methods:**

1. **Initialization:**
```python
def __init__(self, url: str, username: str, api_token: str):
    self.server = jenkins.Jenkins(url, username=username, password=api_token)
```
- Establishes connection to Jenkins server
- Verifies credentials
- Tests connection with `get_whoami()`

2. **List Jobs:**
```python
def list_jobs(self) -> List[Dict]:
    return self.server.get_jobs()
```
- Retrieves all available jobs
- Returns list of job information

3. **Get Job Status:**
```python
def get_job_status(self, job_name: str) -> Optional[Dict]:
    job_info = self.server.get_job_info(job_name)
    build_info = self.server.get_build_info(job_name, latest_build['number'])
```
- Gets latest build information
- Returns detailed status

4. **Trigger Job:**
```python
def trigger_job(self, job_name: str, parameters: Dict = None) -> bool:
    self.server.build_job(job_name, parameters=parameters)
```
- Starts a new build
- Supports parameterized builds

**Example Commands:**

1. **List All Jobs:**
```bash
python jenkins_controller.py \
    --url "http://jenkins.example.com" \
    --username "admin" \
    --api-token "your-api-token" \
    --action list
```
Output:
```
Successfully connected to Jenkins at http://jenkins.example.com

Available Jobs:
- build-app (blue)
- deploy-staging (blue)
- run-tests (yellow)
```

2. **Check Job Status:**
```bash
python jenkins_controller.py \
    --url "http://jenkins.example.com" \
    --username "admin" \
    --api-token "your-api-token" \
    --action status \
    --job-name "build-app"
```
Output:
```
Job Status:
job_name: build-app
build_number: 42
status: SUCCESS
timestamp: 2024-01-20 15:30:45
duration: 120.50 seconds
```

3. **Trigger a Job:**
```bash
python jenkins_controller.py \
    --url "http://jenkins.example.com" \
    --username "admin" \
    --api-token "your-api-token" \
    --action trigger \
    --job-name "build-app" \
    --parameters '{"branch": "main", "environment": "staging"}'
```
Output:
```
Successfully triggered job: build-app
```

**Error Handling Examples:**

1. **Connection Error:**
```bash
python jenkins_controller.py \
    --url "http://invalid-jenkins.com" \
    --username "admin" \
    --api-token "invalid-token" \
    --action list
```
Output:
```
Failed to connect to Jenkins: Connection refused
```

2. **Invalid Job Name:**
```bash
python jenkins_controller.py \
    --url "http://jenkins.example.com" \
    --username "admin" \
    --api-token "your-api-token" \
    --action status \
    --job-name "non-existent-job"
```
Output:
```
Failed to get job status: Job not found
```

**Best Practices Used:**

1. **Type Hints:**
   - Clear function signatures
   - Better code maintainability
   - IDE support

2. **Error Handling:**
   - Try-catch blocks
   - Informative error messages
   - Graceful failure handling

3. **Documentation:**
   - Docstrings for all methods
   - Clear parameter descriptions
   - Return value documentation

4. **Security:**
   - API token authentication
   - No hardcoded credentials
   - Secure parameter handling

Would you like me to:
1. Add more example commands?
2. Show how to handle specific error cases?
3. Add more Jenkins API features?
4. Create a configuration file for common settings?

