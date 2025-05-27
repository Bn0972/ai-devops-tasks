Let me analyze these Docker logs chronologically:

1. **First Log (10:15:32)**:
```
May 19 10:15:32 server dockerd[1234]: time="2025-05-19T10:15:32.123456789Z" level=info msg="Container 78a2b3c4 health status changed from starting to healthy"
```
- Container 78a2b3c4 started successfully
- Health check passed
- Container was marked as "healthy"

2. **Second Log (10:16:45)**:
```
May 19 10:16:45 server dockerd[1234]: time="2025-05-19T10:16:45.987654321Z" level=info msg="Container 78a2b3c4 failed to connect to 172.17.0.3:5432: connection refused"
```
- Container tried to connect to PostgreSQL (port 5432)
- Connection was refused
- Target IP: 172.17.0.3 (another container in the Docker network)

3. **Third Log (10:16:47)**:
```
May 19 10:16:47 server dockerd[1234]: time="2025-05-19T10:16:47.246813579Z" level=warning msg="Container 78a2b3c4 health status changed from healthy to unhealthy"
```
- Container's health status degraded
- Changed from "healthy" to "unhealthy"
- This happened 2 seconds after the connection failure

**Identified Issues**:
1. **Database Connection Problem**:
   - Container can't connect to PostgreSQL
   - Possible causes:
     - PostgreSQL container not running
     - Network configuration issues
     - PostgreSQL not accepting connections
     - Wrong credentials or configuration

2. **Health Check Failure**:
   - Container's health check is failing
   - Likely because it can't connect to the database
   - Health check might be too strict

3. **Timing Issues**:
   - Container was healthy for about 1 minute
   - Then failed to connect to database
   - Health status changed 2 seconds after connection failure

**Recommended Actions**:
1. Check if PostgreSQL container is running:
```bash
docker ps | grep 172.17.0.3
```

2. Verify network connectivity:
```bash
docker network inspect <network_name>
```

3. Check PostgreSQL logs:
```bash
docker logs <postgres_container_id>
```

4. Verify database configuration:
   - Check connection string
   - Verify credentials
   - Check PostgreSQL's pg_hba.conf

5. Review health check configuration:
   - Consider adding retry logic
   - Adjust health check timeout
   - Make health check less strict if appropriate

Would you like me to provide more specific troubleshooting steps or explain any part in more detail?
