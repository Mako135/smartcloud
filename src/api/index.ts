

interface emailProps {
    name: string;
    company: string;
    phone: string
}

export const sendEmail = async ({ name, company, phone }: emailProps) => {
    try {
        const response = await fetch('https://smartcloud.uz/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, company, phone }),
        });

        return response.json();
    } catch (error) {
        return { ok: false };
    }
};