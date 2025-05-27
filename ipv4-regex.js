/**
 * IPv4 Address Validation Regex
 * 
 * Pattern breakdown:
 * ^                 - Start of string
 * (?:               - Non-capturing group
 *   (?:             - Another non-capturing group
 *     25[0-5]       - 250-255
 *     |             - OR
 *     2[0-4][0-9]   - 200-249
 *     |             - OR
 *     [01]?[0-9][0-9]? - 0-199
 *   )               - End of inner group
 *   \.              - Literal dot
 * ){3}              - Repeat 3 times (for first 3 octets)
 * (?:               - Non-capturing group for last octet
 *   25[0-5]         - 250-255
 *   |               - OR
 *   2[0-4][0-9]     - 200-249
 *   |               - OR
 *   [01]?[0-9][0-9]? - 0-199
 * )                 - End of last octet group
 * $                 - End of string
 */
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

// Test cases
const testCases = [
    // Valid IPs
    "192.168.1.1",
    "10.0.0.1",
    "172.16.0.1",
    "255.255.255.255",
    "0.0.0.0",
    "127.0.0.1",
    
    // Invalid IPs
    "256.1.2.3",        // Number > 255
    "1.1.1.1.1",        // Too many octets
    "1.1.1",            // Too few octets
    "192.168.001.1",    // Leading zeros
    "192.168.1",        // Missing octet
    "192.168.1.",       // Trailing dot
    ".192.168.1.1",     // Leading dot
    "192.168.1.1.1",    // Extra octet
    "192.168.1.256",    // Invalid last octet
    "abc.def.ghi.jkl",  // Non-numeric
    "192.168.1",        // Incomplete
    "192.168.1.",       // Trailing dot
    "192.168..1",       // Missing octet
    "192.168.1.1.1",    // Extra octet
    "192.168.1.1a",     // Invalid characters
];

// Test the regex
console.log("Testing IPv4 Regex:\n");
testCases.forEach(ip => {
    const isValid = ipv4Regex.test(ip);
    console.log(`${ip}: ${isValid ? 'Valid' : 'Invalid'}`);
}); 