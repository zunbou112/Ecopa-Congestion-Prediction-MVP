const mockPrediction = {
  delay_minutes: 30,
  event_name: "SISTミュージックフェス"
};

function formatDate() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    
    const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
    const weekday = weekdays[now.getDay()];
    
    return `${month}月${day}日 (${weekday})`;
}

function displayPrediction() {
    const dateDisplay = document.getElementById('dateDisplay');
    const delayTime = document.getElementById('delayTime');
    const reasonText = document.getElementById('reasonText');
    
    dateDisplay.textContent = formatDate();
    delayTime.textContent = `+${mockPrediction.delay_minutes}分`;
    reasonText.textContent = `本日のイベント: ${mockPrediction.event_name}`;
}

document.addEventListener('DOMContentLoaded', () => {
    displayPrediction();
});
