import FuneralBooking from "./FuneralBooking";
import HomeService from "./HomeService";
import WeddingBooking from "./WeddingBooking";

function BookingPage() {
    return ( 
        <>
        <HomeService />
        <WeddingBooking />
        <FuneralBooking />
        </>
     );
}

export default BookingPage;
