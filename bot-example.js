// Example Telegram Bot Backend
// Install: npm install node-telegram-bot-api

const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot token from BotFather
const token = 'YOUR_BOT_TOKEN_HERE';
const webAppUrl = 'https://YOUR_USERNAME.github.io/productivity-hub';

// Create a bot instance
const bot = new TelegramBot(token, {polling: true});

// Handle /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const userName = msg.from.first_name;
  
  bot.sendMessage(chatId, 
    `🚀 Welcome to Productivity Hub, ${userName}!\n\n` +
    `Boost your productivity with neuroscience-based tools:\n` +
    `🧠 Nootropics recommendations\n` +
    `🎵 Binaural beats generator\n` +
    `⏰ Pomodoro timer\n` +
    `💪 Training programs\n\n` +
    `Tap the button below to get started!`, {
    reply_markup: {
      inline_keyboard: [[
        { text: '🚀 Open Productivity Hub', web_app: { url: webAppUrl } }
      ]]
    }
  });
});

// Handle /nootropics command
bot.onText(/\/nootropics/, (msg) => {
  const chatId = msg.chat.id;
  
  bot.sendMessage(chatId, 
    `🧠 **Nootropics Navigator**\n\n` +
    `Get personalized nootropic recommendations based on your goals:\n` +
    `⚡ Energy & Endurance\n` +
    `🧠 Cognitive & Memory\n` +
    `⚖️ Hormonal Balance\n\n` +
    `Explore our comprehensive library of 50+ compounds!`, {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [[
        { text: '🧠 Open Nootropics', web_app: { url: webAppUrl + '#nootropics' } }
      ]]
    }
  });
});

// Handle /binaural command
bot.onText(/\/binaural/, (msg) => {
  const chatId = msg.chat.id;
  
  bot.sendMessage(chatId, 
    `🎵 **Binaural Beats Generator**\n\n` +
    `Optimize your mental state with brainwave entrainment:\n` +
    `😴 Deep Sleep (0.5-4 Hz)\n` +
    `🧘 Relaxation (8 Hz)\n` +
    `🎯 Focus (10 Hz)\n` +
    `⚡ Alertness (16 Hz)\n` +
    `💡 Insight (40 Hz)\n\n` +
    `Use headphones for best results!`, {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [[
        { text: '🎵 Start Binaural Beats', web_app: { url: webAppUrl + '#binauralBeats' } }
      ]]
    }
  });
});

// Handle /pomodoro command
bot.onText(/\/pomodoro/, (msg) => {
  const chatId = msg.chat.id;
  
  bot.sendMessage(chatId, 
    `⏰ **Pomodoro Timer**\n\n` +
    `Master focused work sessions:\n` +
    `⏱️ 25-minute work sessions\n` +
    `☕ 5-minute short breaks\n` +
    `🌴 15-minute long breaks\n` +
    `📊 Session tracking\n\n` +
    `Boost your productivity with timed focus!`, {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [[
        { text: '⏰ Start Pomodoro', web_app: { url: webAppUrl + '#pomodoro' } }
      ]]
    }
  });
});

// Handle /training command
bot.onText(/\/training/, (msg) => {
  const chatId = msg.chat.id;
  
  bot.sendMessage(chatId, 
    `💪 **Training Hub**\n\n` +
    `Comprehensive cognitive enhancement programs:\n` +
    `🎯 Focus & Concentration (4 weeks)\n` +
    `🧠 Memory Enhancement (6 weeks)\n` +
    `✨ Creative Thinking (4 weeks)\n` +
    `⚡ Productivity Mastery (8 weeks)\n\n` +
    `Transform your cognitive abilities!`, {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [[
        { text: '💪 Start Training', web_app: { url: webAppUrl + '#training' } }
      ]]
    }
  });
});

// Handle /help command
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  
  bot.sendMessage(chatId, 
    `🤖 **Productivity Hub Bot Commands**\n\n` +
    `/start - Open the main app\n` +
    `/nootropics - Get nootropic recommendations\n` +
    `/binaural - Start binaural beats session\n` +
    `/pomodoro - Start pomodoro timer\n` +
    `/training - Access training programs\n` +
    `/help - Show this help message\n\n` +
    `💡 **Tip**: Use the inline keyboard buttons for quick access!`, {
    parse_mode: 'Markdown'
  });
});

// Handle web app data (when users interact with the app)
bot.on('web_app_data', (msg) => {
  const chatId = msg.chat.id;
  const data = msg.web_app_data.data;
  
  // You can handle data sent from the web app here
  console.log('Web app data received:', data);
  
  bot.sendMessage(chatId, 
    `✅ Data received from Productivity Hub!\n\n` +
    `You can process this data to save user preferences, ` +
    `track usage, or provide personalized recommendations.`, {
    parse_mode: 'Markdown'
  });
});

// Handle callback queries (button clicks)
bot.on('callback_query', (callbackQuery) => {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const chatId = msg.chat.id;
  
  if (action === 'open_app') {
    bot.answerCallbackQuery(callbackQuery.id);
    bot.sendMessage(chatId, 'Opening Productivity Hub...', {
      reply_markup: {
        inline_keyboard: [[
          { text: '🚀 Open App', web_app: { url: webAppUrl } }
        ]]
      }
    });
  }
});

// Error handling
bot.on('error', (error) => {
  console.error('Bot error:', error);
});

bot.on('polling_error', (error) => {
  console.error('Polling error:', error);
});

console.log('Productivity Hub Bot is running...');
console.log('Bot username: @your_productivity_bot');
console.log('Web app URL:', webAppUrl);

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Stopping bot...');
  bot.stopPolling();
  process.exit(0);
});

module.exports = bot; 