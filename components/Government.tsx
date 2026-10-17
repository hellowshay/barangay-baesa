const provincialOfficials = [
  ['MA. ELEANOR R. JUAN', 'VICTOR D. BERNARDO'],
  ['EMMANUEL BANJO A. PILAR', 'KRISTINER R. MATIAS'],
  ['ERWIN REY A. MEDINA', 'VITO SOTTO-GENEROSO'],
]

const barangayOfficials = [
  'EDUARDO R. JUAN',
  'MICHAEL ANGELO G. LLANTOS',
  'MAGNOLIA L. TURINGAN',
  'RESTI TUTO DC. RIVERA',
  'ERNEL P. MONTEVIRGEN',
  'CARMEN V. PAUSLOC',
  'MARK ANTHONY R. JUAN',
]

function OfficialCard({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <article className="flex min-h-[290px] flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-md transition-all hover:shadow-lg">
      {/* Pinalaki ang litrato (size-24 halip na size-12) at nilagyan ng border */}
      <img 
        src={image} 
        alt={`${name} portrait`} 
        className="mb-4 size-24 rounded-full border-2 border-[#8bcaa0] object-cover shadow-sm" 
      />
      <h3 className="text-xs font-bold tracking-tight text-[#0c1730] sm:text-sm">{name}</h3>
      <p className="mt-2 text-[11px] font-medium text-[#4d5a6c]">{role}</p>
    </article>
  )
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      {items.map((name, index) => (
        <div key={name} className="flex items-center gap-3 rounded-xl bg-[#f7f9fc] px-3.5 py-3 text-[11px] font-medium text-[#111a2d]">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#e7f5e9] text-[10px] font-bold text-[#317448]">{index + 1}</span>
          {name}
        </div>
      ))}
    </div>
  )
}

export default function Government() {
  return (
    <section id="government" className="min-h-screen bg-[#eaf7f0] px-5 py-16 text-[#0e5c3d] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0E6E3B]">Leadership</p>
          <h1 className="text-3xl font-bold tracking-tight text-[#0F5235] sm:text-4xl">Government Officials</h1>
          <p className="mt-2 text-sm text-[#4B5F56]">Meet the dedicated leaders and public servants serving our community.</p>
        </header>

        {/* City Government Section */}
        <section aria-labelledby="city-government">
          <h2 id="city-government" className="mb-5 text-xs font-bold uppercase tracking-[0.13em] text-[#125c40]">City Government</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <OfficialCard 
              name="HON. MARIA VICTORIA CO-PILAR" 
              role="Congresswoman, District VI, Quezon City" 
              image="/co-pilar.jpg" 
            />
            <OfficialCard 
              name={'HON. MARIA JOSEFINA TANYA "JOY" BELMONTE'} 
              role="City Mayor, Quezon City" 
              image="/belmonte.jpg" 
            />
            <OfficialCard 
              name="HON. GIAN CARLO SOTTO" 
              role="City Vice Mayor, Quezon City" 
              image="/sotto.jpg" 
            />
          </div>

          <div className="mt-8 rounded-3xl border border-[#8bcaa0] bg-white p-6 shadow-sm sm:p-8">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.1em] text-[#125c40]">Sangguniang Panlungsod – Councilors, District VI</h3>
            <NumberedList items={provincialOfficials.flat()} />
          </div>
        </section>

        {/* Barangay Government Section */}
        <section aria-labelledby="barangay-government" className="mt-10">
          <h2 id="barangay-government" className="mb-5 text-xs font-bold uppercase tracking-[0.13em] text-[#125c40]">Barangay Government</h2>
          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <OfficialCard 
              name="HON. LOTTIE GEMMA D. JUAN" 
              role="Barangay Captain, Barangay Baesa" 
              image="/juan.jpg" 
            />
            <div className="rounded-3xl border border-[#8bcaa0] bg-white p-6 shadow-sm sm:p-8">
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.1em] text-[#125c40]">Sangguniang Barangay – Council Members</h3>
              <NumberedList items={barangayOfficials} />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}