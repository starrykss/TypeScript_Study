import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'YOUR_API_KEY';

// declare var google: any;

type GoogleGeocodingResponse = {
  results: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }[];
  status: 'OK' | 'ZERO_RESULTS';
};

// 주소 등록 처리
function searchAddressHandler(event: Event) {
  event.preventDefault();

  // Input 요소에서 값 가져오기
  const enteredAddress = addressInput.value;

  // 구글 맵 API에 요청 보내기
  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress,
      )}&key=${GOOGLE_API_KEY}`,
    )
    .then((response) => {
      if (response.data.status !== 'OK') {
        throw new Error('Could not fetch location!');
      }

      // 좌표계 받아오기
      const coordinates = response.data.results[0].geometry.location;

      const map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center: coordinates,
          zoom: 16,
        },
      );

      // 마커 표시 처리
      new google.maps.Marker({
        position: coordinates,
        map: map,
      });
    })
    .catch((err) => {
      alert(err.message);

      console.log(err);
    });
}

// 폼 제출 이벤트 리스너 등록
form.addEventListener('submit', searchAddressHandler);
