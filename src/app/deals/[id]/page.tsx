type Props = {
  params: {
    id: string
  }
}

export default function DealDetails({ params }: Props) {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Deal Details: {params.id}</h1>
        <div className="space-y-6">
          {/* Add deal details content */}
        </div>
      </div>
    </main>
  );
}