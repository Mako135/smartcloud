

export const sendEmail = async (emailData: string) => {
    console.log(1231231)
    try {
        const response = await fetch('https://smartcloud.uz/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
        });

        return response.json();
    } catch (error) {
        console.error('Network error:', error);
    }
};
