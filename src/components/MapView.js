"use client"

import { useEffect, useRef } from "react"

function MapView({ places }) {
  const mapRef = useRef(null)

  useEffect(() => {
    // 이 부분은 실제로는 카카오맵이나 네이버맵 API를 사용하여 구현합니다.
    // 여기서는 간단한 예시로 대체합니다.
    if (mapRef.current) {
      const mapElement = mapRef.current

      // 지도 배경 스타일
      mapElement.style.background = "#f0f0f0"
      mapElement.style.position = "relative"

      // 각 장소를 지도에 표시
      places.forEach((place) => {
        const marker = document.createElement("div")
        marker.style.position = "absolute"
        marker.style.width = "20px"
        marker.style.height = "20px"
        marker.style.borderRadius = "50%"
        marker.style.backgroundColor = getColorByClassification(place.classification)
        marker.style.border = "2px solid white"
        marker.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)"

        // 위치 계산 (실제로는 지도 API의 좌표 변환 함수를 사용합니다)
        // 여기서는 간단한 예시로 임의의 위치에 배치합니다
        const left = ((place.longitude - 126.9) * 1000) % mapElement.clientWidth
        const top = ((place.latitude - 37.5) * 1000) % mapElement.clientHeight

        marker.style.left = `${left}px`
        marker.style.top = `${top}px`
        marker.style.transform = "translate(-50%, -50%)"
        marker.style.cursor = "pointer"

        // 툴팁 추가
        marker.title = place.name

        // 클릭 이벤트
        marker.addEventListener("click", () => {
          alert(`${place.name}\n분류: ${place.classification}\n위치: ${place.latitude}, ${place.longitude}`)
        })

        mapElement.appendChild(marker)
      })

      // 지도 중앙에 서울 표시
      const seoulMarker = document.createElement("div")
      seoulMarker.textContent = "서울"
      seoulMarker.style.position = "absolute"
      seoulMarker.style.left = "50%"
      seoulMarker.style.top = "50%"
      seoulMarker.style.transform = "translate(-50%, -50%)"
      seoulMarker.style.fontSize = "24px"
      seoulMarker.style.fontWeight = "bold"
      seoulMarker.style.color = "#333"

      mapElement.appendChild(seoulMarker)

      // 안내 메시지
      const infoText = document.createElement("div")
      infoText.textContent = "실제 서비스에서는 카카오맵 또는 네이버맵 API를 연동하여 구현합니다."
      infoText.style.position = "absolute"
      infoText.style.bottom = "20px"
      infoText.style.left = "50%"
      infoText.style.transform = "translateX(-50%)"
      infoText.style.backgroundColor = "rgba(255,255,255,0.8)"
      infoText.style.padding = "8px 16px"
      infoText.style.borderRadius = "4px"
      infoText.style.fontSize = "14px"

      mapElement.appendChild(infoText)
    }
  }, [places])

  function getColorByClassification(classification) {
    switch (classification) {
      case "공공시설":
        return "#4f46e5" // indigo
      case "관광명소":
        return "#ef4444" // red
      case "공원":
        return "#10b981" // emerald
      default:
        return "#6b7280" // gray
    }
  }

  return <div ref={mapRef} className="w-full h-full"></div>
}

export default MapView

