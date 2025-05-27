#!/bin/bash

# Function to check if Docker is running
check_docker() {
    if systemctl is-active --quiet docker; then
        echo "Docker is running"
        return 0
    else
        echo "Docker is not running"
        return 1
    fi
}

# Function to start Docker
start_docker() {
    echo "Attempting to start Docker..."
    sudo systemctl start docker
    
    # Wait for Docker to start (max 30 seconds)
    for i in {1..30}; do
        if check_docker; then
            echo "Docker started successfully"
            return 0
        fi
        sleep 1
    done
    
    echo "Failed to start Docker after 30 seconds"
    return 1
}

# Main script
echo "Checking Docker status..."

if check_docker; then
    echo "No action needed"
else
    start_docker
fi

# Display Docker version if running
if check_docker; then
    docker --version
fi
