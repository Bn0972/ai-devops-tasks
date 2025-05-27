CSV file with the following considerations:

1. **Header Row**:
   - Contains all column names: id, name, email, roles

2. **Data Formatting**:
   - IDs are kept as numbers
   - Names are in quotes (because they contain spaces)
   - Emails are without quotes (no special characters)
   - Roles are properly formatted:
     - Single role: no quotes needed
     - Multiple roles: in quotes with comma separator

3. **Special Handling**:
   - Names are quoted to handle spaces
   - Multiple roles are quoted to handle the comma
   - Proper CSV escaping for special characters

The CSV follows standard conventions:
- Comma as delimiter
- Quotes for fields containing special characters
- No trailing commas
- Consistent formatting

Would you like me to:
1. Add more data?
2. Use a different delimiter?
3. Add additional formatting?
4. Show how to convert this back to JSON?
