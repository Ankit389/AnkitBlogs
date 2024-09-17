


import Image from 'next/image';

export default function About() {
  return (
    <div>
      {/* Main About Section */}
      <div className="flex flex-col items-center justify-center py-16 sm:py-32 bg-gray-100 dark:bg-gray-700">
        <div className="w-full max-w-4xl p-4 sm:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden">
                <Image
                  src="/about.png"
                  alt="About"
                  fill
                  sizes="(max-width: 600px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 dark:text-white mb-4">
                About Me
              </h1>
              <p className="text-gray-600 dark:text-gray-50 text-base sm:text-lg mb-4 text-center md:text-left">
                Hello, I am Ankit Pankaj, a 4th-year Mechanical Engineering undergraduate pursuing my bachelor&#39;s degree from Shri Mata Vaishno Devi University.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-base sm:text-lg text-center md:text-left">
                My journey in the world of technology has been characterized by an insatiable curiosity and a deep passion for problem-solving.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <section className="py-8 sm:py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Ankit&#39;s Journey as a Coder
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-50">
              From curious beginner to seasoned developer, here&#39;s how I navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="/pan.png"
                  alt="Ankit as a beginner"
                  width={500}
                  height={500}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                  The Spark of Curiosity
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50 text-base sm:text-lg">
                  My coding journey began in the second year of college when I first discovered programming. What started as an initial interest rapidly turned into a deep passion.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image
                  src="/to.png"
                  alt="Ankit learning new skills"
                  width={500}
                  height={500}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                  Diving Deeper
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50 text-base sm:text-lg">
                  As I progressed, I delved deeper into complex topics like algorithms and web development. Taking on freelance projects helped me grow my skills further.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="/sv.png"
                  alt="Ankit working on a big project"
                  width={500}
                  height={500}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                  Taking on Challenges
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50 text-base sm:text-lg">
                  I began working on larger projects and contributing to open-source communities, constantly pushing myself to grow and overcome challenges.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image
                  src="/tow.png"
                  alt="Ankit mentoring others"
                  width={500}
                  height={500}
                  className="w-80 h-80 rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                  Giving Back
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50 text-base sm:text-lg">
                  Today, I enjoy mentoring others and contributing to the developer community through tutorials and talks.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="/holi.png"
                  alt="Ankit celebrating Holi"
                  width={500}
                  height={500}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                  Celebrating Holi in College
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50 text-base sm:text-lg">
                  Celebrating Holi with friends amidst the academic hustle strengthens bonds and creates lasting memories.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

