type item = {
  icon: string,
  label: string,
  description: string,
}

type t = {
  id: int,
  title: string,
  items: array<item>,
}

let offerings = [
  {
    id: 1,
    title: "Drywall installation",
    items: [
      {
        icon: "garage",
        label: "Residential",
        description: "Home extensions, wall additions, or simple patches, we work \
               quickly to accomodate any of your drywall needs.",
      },
      {
        icon: "buildings",
        label: "Commercial",
        description: "Looking for upgrades to the office? We help professional \
               businesses with additions and upgrade their suites.",
      },
    ],
  },
  {
    id: 2,
    title: "Drywall & plaster repair",
    items: [
      {
        icon: "disc",
        label: "Drywall cracks & holes",
        description: "Our team fixes damaged drywall caused by moisture, poor \
               installation, or even the settling of the structure.",
      },
      {
        icon: "fire",
        label: "Fire, smoke & water damage",
        description: "Recent fire or pipe burst? We remove the lingering smell of \
               smoke or mildew.",
      },
    ],
  },
  {
    id: 3,
    title: "Drywall finishing",
    items: [
      {
        icon: "paint-roller",
        label: "Plaster finishing",
        description: "Unfinished drywall doesn’t look the best. Let our professionals \
               help get your drywall ready for paint or paper.",
      },
      {
        icon: "wall",
        label: "Texture drywall",
        description: "Our team can help with any kind of texture you are looking \
               for—skip trowel, orange peel, sand, knockdown, and smooth!",
      },
    ],
  },
]

@react.component
let make = () =>
  <div className="mx-auto max-w-screen-xl px-8 2xl:px-0">
    <h2 className="mb-8 text-center text-3xl font-bold text-gray-50 md:mb-16 md:text-5xl">
      {"What we offer"->React.string}
    </h2>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {offerings
      ->Array.map(o =>
        <div key={string_of_int(o.id)} className="rounded-[40px] bg-gray-700 p-8">
          <h3 className="text-center text-xl font-bold text-yellow-base md:text-2xl">
            {React.string(o.title)}
          </h3>
          {o.items
          ->Array.map(i =>
            <div key={i.icon} className="mt-6 flex md:mt-12">
              <span>
                <Icon name={i.icon} className="fill-yellow-base" size="30" />
              </span>
              <div className="ml-4">
                <h4 className="mb-3 text-lg font-medium text-gray-50 md:text-xl">
                  {React.string(i.label)}
                </h4>
                <p> {React.string(i.description)} </p>
              </div>
            </div>
          )
          ->React.array}
        </div>
      )
      ->React.array}
    </div>
  </div>
