"use client"
import { useParams, Link } from "react-router-dom"
import { MapPin, Clock, Phone, ExternalLink, ArrowLeft, Bus, Train, Car } from "lucide-react"
import { places } from "../data/places"

function PlaceDetailPage() {
  const { id } = useParams()
  const place = places.find((p) => p.id === Number.parseInt(id))

  if (!place) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">장소를 찾을 수 없습니다</h1>
        <p className="text-muted-foreground mb-8">요청하신 장소 정보를 찾을 수 없습니다.</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          홈으로 돌아가기
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          목록으로 돌아가기
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative aspect-video rounded-xl overflow-hidden">
          <img src={place.image !== null ? ("/images/places/" + place.image  + ".jpg") : "/placeholder.svg"} alt={place.name} className="w-full h-full object-cover" />
          <span className="absolute top-4 right-4 text-sm inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
            {place.classification}
          </span>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{place.name}</h1>

          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">주소</h3>
                <p className="text-muted-foreground">{place.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">운영시간</h3>
                <p className="text-muted-foreground">{place.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">전화번호</h3>
                <p className="text-muted-foreground">{place.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ExternalLink className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">웹사이트</h3>
                <a
                  href={place.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {place.website}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-5 w-5 mt-0.5 flex items-center justify-center text-muted-foreground">₩</div>
              <div>
                <h3 className="font-medium">이용요금</h3>
                <p className="text-muted-foreground">
                  {place.fee} {place.price && `(${place.price})`}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">소개</h3>
            <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: place.description }}></div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">교통 정보</h3>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-3">
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <Train className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">지하철</h4>
                    <p className="text-sm text-muted-foreground">{place.subway}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-3">
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <Bus className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">버스</h4>
                    <p className="text-sm text-muted-foreground">{place.bus}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">주차</h4>
                    <p className="text-sm text-muted-foreground">{place.parking}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href={`https://map.kakao.com/link/to/${place.name},${place.latitude},${place.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              길찾기
            </a>
            <a
              href={place.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              공식 웹사이트 방문
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">다른 야경 명소</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {places
            .filter((p) => p.id !== Number.parseInt(id))
            .slice(0, 4)
            .map((place) => (
              <div
                key={place.id}
                className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-40 w-full">
                  <img
                    src={place.image || "/placeholder.svg"}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold truncate">{place.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 truncate">{place.address}</p>
                  <Link
                    to={`/place/${place.id}`}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-auto px-0 mt-2"
                  >
                    상세정보 보기
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default PlaceDetailPage

