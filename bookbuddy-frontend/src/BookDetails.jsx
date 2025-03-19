import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Book Details</h1>
      <p className="mt-2 text-gray-600">Details about book ID: {id}</p>
    </div>
  );
}

export default BookDetails;
