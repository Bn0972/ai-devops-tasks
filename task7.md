I'll explain the script line by line for beginners:

```bash
#!/bin/bash
```
This is called a "shebang" line. It tells the system to use the bash shell to execute this script.

```bash
# Function to check if Docker is running
check_docker() {
```
This starts a function named `check_docker`. Functions are reusable blocks of code.

```bash
    if systemctl is-active --quiet docker; then
```
- `systemctl` is a command to manage system services
- `is-active` checks if a service is running
- `--quiet` means don't show any output
- `docker` is the service we're checking

```bash
        echo "Docker is running"
        return 0
```
- If Docker is running, print a message
- `return 0` means the function completed successfully

```bash
    else
        echo "Docker is not running"
        return 1
```
- If Docker is not running, print a message
- `return 1` indicates an error or failure

```bash
# Function to start Docker
start_docker() {
```
This starts another function named `start_docker` to handle starting the Docker service.

```bash
    echo "Attempting to start Docker..."
    sudo systemctl start docker
```
- Print a message
- `sudo` runs the command with administrator privileges
- `systemctl start docker` starts the Docker service

```bash
    # Wait for Docker to start (max 30 seconds)
    for i in {1..30}; do
```
This creates a loop that will run 30 times, waiting 1 second between each attempt.

```bash
        if check_docker; then
            echo "Docker started successfully"
            return 0
        fi
        sleep 1
```
- Check if Docker is running
- If it is, print success message and exit function
- If not, wait 1 second and try again

```bash
    echo "Failed to start Docker after 30 seconds"
    return 1
```
If Docker doesn't start within 30 seconds, print an error message.

```bash
# Main script
echo "Checking Docker status..."
```
This is where the main part of the script begins.

```bash
if check_docker; then
    echo "No action needed"
else
    start_docker
fi
```
- Check if Docker is running
- If it is, do nothing
- If not, try to start it

```bash
# Display Docker version if running
if check_docker; then
    docker --version
fi
```
- If Docker is running, show its version
- This helps confirm everything is working correctly

To use this script:
1. Save it as `check_docker.sh`
2. Make it executable with: `chmod +x check_docker.sh`
3. Run it with: `./check_docker.sh`

The script will:
- Check if Docker is running
- Start it if it's not running
- Wait up to 30 seconds for it to start
- Show the Docker version if successful

Note: You'll need to enter your password when the script uses `sudo` to start Docker.
