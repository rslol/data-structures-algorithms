/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
    const set = new Set(); 
    
    for (const email of emails) {
        // Get localName          
        const localName = email.split('@');
        // Get everything before the '+'       
        localName[0] = (localName[0].split('+'))[0];
        // Replace all dots 
        localName[0] = localName[0].replace(/\./g, "");
        
        set.add(localName.join("@"))
    }
    
    return set.size;
};