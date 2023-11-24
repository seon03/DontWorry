<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=APIKEY&libraries=services,clusterer,drawing"></script>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=368257d3b819739048a408d61076f988"></script>
</head>

<body>
    <div id="map" style="width:500px;height:400px;"></div>
    <script>
        function success({ coords, timestamp }) {
            const latitude = coords.latitude;   // 위도
            const longitude = coords.longitude; // 경도
            const date = new Date(timestamp);
            
            alert(`위도: ${latitude}, 경도: ${longitude}, 위치 반환 시간: ${date}`);

            var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
            var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(latitude, longitude),
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        
        }

        function getUserLocation() {
            if (!navigator.geolocation) {
                throw "위치 정보가 지원되지 않습니다.";
            }
            navigator.geolocation.getCurrentPosition(success); // 사용자 현재 위치
            // navigator.geolocation.watchPosition(success); // 위치 변화가 생길 때 호출됨 
        }
        getUserLocation();
    </script>
</body>

</html>
