"use client"

import React from "react"
import { MapPin, Clock, Info } from "lucide-react"
import PlaceCard from "../components/PlaceCard"
import MapView from "../components/MapView"
import { places } from "../data/places"

function HomePage() {
  const [activeTab, setActiveTab] = React.useState("all")

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">서울 야경명소</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
              홈
            </a>
            <a
              href="#places"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              명소 목록
            </a>
            <a href="#map" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              지도
            </a>
            <a href="#info" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              이용안내
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 hidden md:flex">
              <Info className="mr-2 h-4 w-4" />
              문의하기
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/photo-1704545007536-e96a57691e08.avif" alt="서울 야경" className="w-full h-full object-cover brightness-50" />
          </div>
          <div className="container relative z-10 flex flex-col items-center text-center gap-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
              서울의 밤을 빛내는 <br className="hidden sm:inline" />
              <span className="text-primary">아름다운 야경명소</span>
            </h1>
            <p className="max-w-[700px] text-lg text-white/90 md:text-xl">
              서울의 아름다운 야경을 감상할 수 있는 다양한 명소들을 소개합니다. 한강, 남산, 도심 등 서울의 밤을 더욱
              빛나게 하는 장소들을 만나보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="#places"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                명소 둘러보기
              </a>
              <a
                href="#map"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background/20 hover:bg-background/30 border-white/20 text-white h-11 px-8"
              >
                지도로 보기
              </a>
            </div>
          </div>
        </section>

        {/* Places Section */}
        <section id="places" className="py-20 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">서울 야경 명소</h2>
              <p className="mt-4 text-muted-foreground max-w-[700px]">
                서울의 대표적인 야경 명소들을 소개합니다. 각 장소에 대한 상세 정보를 확인해보세요.
              </p>
            </div>

            <div className="w-full">
              <div className="flex justify-center mb-8">
                <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                  <button
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === "all" ? "bg-background text-foreground shadow-sm" : "hover:bg-muted hover:text-foreground"}`}
                    onClick={() => setActiveTab("all")}
                  >
                    전체
                  </button>
                  <button
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === "public" ? "bg-background text-foreground shadow-sm" : "hover:bg-muted hover:text-foreground"}`}
                    onClick={() => setActiveTab("public")}
                  >
                    공공시설
                  </button>
                  <button
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === "tourist" ? "bg-background text-foreground shadow-sm" : "hover:bg-muted hover:text-foreground"}`}
                    onClick={() => setActiveTab("tourist")}
                  >
                    관광명소
                  </button>
                  <button
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === "park" ? "bg-background text-foreground shadow-sm" : "hover:bg-muted hover:text-foreground"}`}
                    onClick={() => setActiveTab("park")}
                  >
                    공원
                  </button>
                </div>
              </div>

              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {places
                    .filter((place) => {
                      if (activeTab === "all") return true
                      if (activeTab === "public") return place.classification === "공공시설"
                      if (activeTab === "tourist") return place.classification === "관광명소"
                      if (activeTab === "park") return place.classification === "공원"
                      return true
                    })
                    .map((place) => (
                      <PlaceCard
                        key={place.id}
                        id={place.id}
                        name={place.name}
                        description={place.description}
                        image={place.image}
                        address={place.address}
                        hours={place.hours}
                        fee={place.fee}
                        classification={place.classification}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map" className="py-20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">지도로 보기</h2>
              <p className="mt-4 text-muted-foreground max-w-[700px]">
                서울 야경 명소들의 위치를 지도에서 확인해보세요.
              </p>
            </div>

            <div className="w-full h-[600px] rounded-xl overflow-hidden border">
              <MapView places={places} />
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section id="info" className="py-20 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">이용안내</h2>
              <p className="mt-4 text-muted-foreground max-w-[700px]">
                서울 야경 명소 방문 시 알아두면 좋은 정보들을 안내해드립니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">방문 시간</h3>
                    <p className="text-muted-foreground">
                      대부분의 야경 명소는 저녁 시간에 방문하는 것이 좋습니다. 일몰 후 1-2시간 사이에 방문하면 가장
                      아름다운 야경을 감상할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">교통 안내</h3>
                    <p className="text-muted-foreground">
                      대중교통을 이용하는 것이 편리합니다. 각 명소별 지하철역과 버스 정류장 정보를 확인하세요. 주차
                      공간이 제한적인 곳이 많으니 주의하세요.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Info className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">유의사항</h3>
                    <p className="text-muted-foreground">
                      일부 시설은 기상 조건이나 특별 행사로 인해 운영 시간이 변경될 수 있습니다. 방문 전 공식 웹사이트나
                      전화로 확인하는 것이 좋습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12 bg-background">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">서울 야경명소</h3>
            <p className="text-sm text-muted-foreground">서울의 아름다운 야경을 소개하는 공식 웹사이트입니다.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">명소 분류</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary">
                  공공시설
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  관광명소
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  공원
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  문화시설
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">관련 정보</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary">
                  서울시 관광
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  교통 정보
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  날씨 정보
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  문의하기
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">연락처</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>서울특별시 중구 세종대로 110</li>
              <li>전화: 02-120</li>
              <li>이메일: info@seoul.go.kr</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="container mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">© 2023 서울 야경명소. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

