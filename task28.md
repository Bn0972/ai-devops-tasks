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

Would you like me to:
1. Add more error handling cases?
2. Include additional Jenkins API features?
3. Add logging functionality?
4. Create a configuration file for credentials?
