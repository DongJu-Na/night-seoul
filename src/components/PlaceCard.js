import { Link } from "react-router-dom"
import { MapPin, Clock, ExternalLink } from "lucide-react"

function PlaceCard({ id, name, description, image, address, hours, fee, classification }) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full">
        <img src={image !== null ? ("/images/places/" + image  + ".jpg") : "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        <span className="absolute top-3 right-3 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
          {classification}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="truncate">{address}</span>
        </div>
        <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span className="truncate">{hours}</span>
        </div>
        <div
          className="mt-3 text-sm text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: description.substring(0, 100) + (description.length > 100 ? "..." : "") }}
        ></div>
      </div>
      <div className="p-5 pt-0 flex items-center justify-between">
        <div>
          <span className="text-sm font-medium">{fee}</span>
        </div>
        <Link
          to={`/place/${id}`}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
        >
          상세정보
          <ExternalLink className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

export default PlaceCard

