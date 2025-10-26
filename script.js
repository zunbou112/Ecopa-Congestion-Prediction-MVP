const mockPrediction = {
  delay_minutes: 30,
  event_name: "SISTミュージックフェス"
};

const mockRoads = [
    { name: '国道150号', congestion: 'high', top: '20%', left: '10%', width: '80%', height: '40px' },
    { name: '県道416号', congestion: 'medium', top: '45%', left: '15%', width: '70%', height: '35px' },
    { name: '愛野駅方面', congestion: 'low', top: '70%', left: '20%', width: '60%', height: '35px' },
    { name: 'エコパ入口', congestion: 'high', top: '35%', left: '70%', width: '25%', height: '30px' }
];

const mockRoutes = [
    {
        name: '愛野駅経由ルート',
        time: '約25分',
        description: '愛野駅から県道を経由するルート。混雑が少なく、スムーズに到着できます。',
        status: 'おすすめ'
    },
    {
        name: '袋井IC経由ルート',
        time: '約30分',
        description: '東名高速道路の袋井ICから一般道を経由。高速を使えば確実です。',
        status: 'おすすめ'
    },
    {
        name: '掛川駅方面ルート',
        time: '約35分',
        description: '掛川駅方面から県道を経由。少し遠回りですが、混雑を避けられます。',
        status: '空いている'
    }
];

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
    reasonText.textContent = `本日のイベント: ${mockPrediction.event_name} のため`;
}

function displayMap() {
    const mapVisual = document.getElementById('mapVisual');
    
    const ecopaMarker = document.createElement('div');
    ecopaMarker.className = 'ecopa-marker';
    ecopaMarker.textContent = 'エコパアリーナ';
    ecopaMarker.style.top = '50%';
    ecopaMarker.style.left = '50%';
    ecopaMarker.style.transform = 'translate(-50%, -50%)';
    mapVisual.appendChild(ecopaMarker);
    
    mockRoads.forEach(road => {
        const roadElement = document.createElement('div');
        roadElement.className = `road ${road.congestion}`;
        roadElement.textContent = road.name;
        roadElement.style.top = road.top;
        roadElement.style.left = road.left;
        roadElement.style.width = road.width;
        roadElement.style.height = road.height;
        mapVisual.appendChild(roadElement);
    });
}

function displayRoutes() {
    const routesContainer = document.getElementById('routesContainer');
    
    mockRoutes.forEach(route => {
        const routeItem = document.createElement('div');
        routeItem.className = 'route-item';
        
        const routeHeader = document.createElement('div');
        routeHeader.className = 'route-header';
        
        const routeName = document.createElement('div');
        routeName.className = 'route-name';
        routeName.textContent = route.name;
        
        const routeTime = document.createElement('div');
        routeTime.className = 'route-time';
        routeTime.textContent = route.time;
        
        routeHeader.appendChild(routeName);
        routeHeader.appendChild(routeTime);
        
        const routeDescription = document.createElement('div');
        routeDescription.className = 'route-description';
        routeDescription.textContent = route.description;
        
        const routeStatus = document.createElement('div');
        routeStatus.className = 'route-status';
        routeStatus.textContent = route.status;
        
        routeItem.appendChild(routeHeader);
        routeItem.appendChild(routeDescription);
        routeItem.appendChild(routeStatus);
        
        routesContainer.appendChild(routeItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayPrediction();
    displayMap();
    displayRoutes();
});
