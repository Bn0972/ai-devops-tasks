Explain how this IPv4 regex works and show the test results:

**Regex Pattern Breakdown:**

1. **Start and End Anchors**:
   - `^` - Start of string
   - `$` - End of string
   - Ensures the entire string is an IP address

2. **Octet Pattern** (repeated 3 times for first 3 octets):
   ```
   (?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)
   ```
   - `25[0-5]` - Matches 250-255
   - `2[0-4][0-9]` - Matches 200-249
   - `[01]?[0-9][0-9]?` - Matches 0-199

3. **Dot Separator**:
   - `\.` - Matches literal dot
   - Escaped because dot is special in regex

4. **Last Octet**:
   - Same pattern as above but not followed by a dot

**Test Results:**
```
Valid IPs:
192.168.1.1: Valid
10.0.0.1: Valid
172.16.0.1: Valid
255.255.255.255: Valid
0.0.0.0: Valid
127.0.0.1: Valid

Invalid IPs:
256.1.2.3: Invalid
1.1.1.1.1: Invalid
1.1.1: Invalid
192.168.001.1: Invalid
192.168.1: Invalid
192.168.1.: Invalid
.192.168.1.1: Invalid
192.168.1.1.1: Invalid
192.168.1.256: Invalid
abc.def.ghi.jkl: Invalid
192.168.1: Invalid
192.168.1.: Invalid
192.168..1: Invalid
192.168.1.1.1: Invalid
192.168.1.1a: Invalid
```

**Key Features of this Regex:**
1. Validates numbers between 0-255
2. Requires exactly 4 octets
3. No leading zeros allowed
4. No extra characters allowed
5. No missing octets allowed
6. No trailing or leading dots allowed

**Common Use Cases:**
1. Form validation
2. Network configuration
3. Security checks
4. Input sanitization

Would you like me to:
1. Add more test cases?
2. Explain any part in more detail?
3. Show how to use this in different programming languages?
4. Add additional validation rules?
