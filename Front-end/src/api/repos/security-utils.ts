export async function sha512(input: string): Promise<string | null> {
    try {
        return crypto.subtle.digest('SHA-512', new TextEncoder().encode(input)).then(buf => {
            return Array.prototype.map.call(new Uint8Array(buf), x => (('00'+x.toString(16)).slice(-2))).join('');
        });
    }
    catch (e: any)
    {
        console.log('Hashing using built-in library failed! Most likely due to an unsupported browser.', e.message, e);
        alert('Failed to encrypt information locally! Your browser may not supported the required data protection features.\nPlease try again on another browser.');
        return null;
    }
}