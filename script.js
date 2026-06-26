async function updateDiscord() {
    try {
        const res = await fetch("https://discord.com/api/guilds/1517214801502273597/widget.json");

        if (!res.ok) throw new Error("Widget not enabled or blocked");

        const data = await res.json();

        document.getElementById("online").textContent =
            data.presence_count ?? "--";

        // fallback logic
        const memberCount =
            data.members?.length ??
            data.presence_count ??
            "Live";

        document.getElementById("members").textContent = memberCount;

    } catch (e) {
        console.error("Discord widget error:", e);
        document.getElementById("members").textContent = "--";
        document.getElementById("online").textContent = "--";
    }
}
