import Image from "next/image";

// Phone frame wrapping a real app screenshot.
export function PhoneFrame({ children, className = "" }) {
  return (
    <div className={`relative rounded-[2.7rem] bg-navy p-[8px] shadow-soft ${className}`}>
      <div className="relative overflow-hidden rounded-[2.3rem] bg-white aspect-[9/19.3]">
        {children}
      </div>
    </div>
  );
}

function Shot({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="320px"
      className="object-cover object-top"
      priority
    />
  );
}

export function MapScreen() {
  return <Shot src="/screens/map.png" alt="myID buddy map of travelers" />;
}
export function TripScreen() {
  return <Shot src="/screens/trip.png" alt="Trip detail with standby travelers" />;
}
export function FlightsScreen() {
  return <Shot src="/screens/flights.png" alt="Staff travel flight loads" />;
}
export function ChatScreen() {
  return <Shot src="/screens/chat.png" alt="Trip group chat" />;
}
export function ProfileScreen() {
  return <Shot src="/screens/profile.png" alt="Verified traveler profile" />;
}
