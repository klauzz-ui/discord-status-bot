✔️ Step 3 — Make it stronger (important upgrade)

Replace your loop with this improved version:

setInterval(async () => {
  for (const [id, name] of Object.entries(channels)) {
    try {
      const ch = await client.channels.fetch(id);

      if (ch && ch.name !== name) {
        await ch.setName(name);
        console.log(`Updated: ${id}`);
      }

    } catch (err) {
      console.log(`Failed ${id}:`, err.message);
    }
  }
}, 10000);
