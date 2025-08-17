<div align="center">

# 🔄 Repo Relay

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Discord.js](https://img.shields.io/badge/Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.js.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

**A Discord bot that automatically sends updates about GitHub repositories to your Discord channels**

</div>

## ✨ Features

- 🔔 Real-time GitHub repository notifications
- 📊 Customizable update frequency
- 🎯 Channel-specific repository tracking
- 🚀 Easy setup and configuration

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Discord Bot Token
- GitHub Personal Access Token (optional, for higher rate limits)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/msh31/repo-relay.git
   cd repo-relay
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your Discord bot token and other settings
   ```

4. **Run the bot**
   ```bash
   node src/deploy-commands.js
   node src/entry.js
   ```

## 📝 Commands

| Command | Description |
|---------|-------------|
| `/track <repo>` | Start tracking a GitHub repository |
| `/untrack <repo>` | Stop tracking a repository |
| `/list` | List all tracked repositories |
| `/help` | Show available commands |

---

Made by [Marco](https://github.com/msh31/)