import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import images from '../src/data/delete';
import OfferCards from '../src/components/OfferCards';
import Testomonials from '../src/components/Testomonials';

type Image = {
  height: number;
  width: number;
  source: string;
};

type Data = {
  id: number;
  alt_text: string;
  link: string;
  images: Image[];
};

type Props = {
  firstPhotos: Data[];
  secondPhotos: Data[];
};

const Home: NextPage<Props> = ({ firstPhotos, secondPhotos }) => {
  console.log(firstPhotos);
  console.log(secondPhotos);
  return (
    <>
      <Head>
        <title>Bison Drywall</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="jumbotron">
        <div className="p-4">
          <Image
            src="/static/images/logo.png"
            alt="Bison Drywall"
            width={94}
            height={40}
          />
        </div>

        <div className="pt-24">
          <h1 className="text-center text-7xl font-bold text-white">
            Bison Drywall
          </h1>
          <h2 className="text-center text-2xl text-white opacity-50">
            Whatever your needs, Bison Drywall can help
          </h2>
        </div>
      </div>

      <main className="mx-auto mt-48 w-full max-w-screen-xl space-y-48 px-8 xl:px-0">
        <OfferCards />

        <div>
          <h2 className="mb-16 max-w-lg text-5xl font-bold text-gray-50">
            Take a look at some before, during, and afer photos of our work
          </h2>

          <div className="flex overflow-x-auto ">
            <div className=" flex flex-col">
              <div className="flex gap-2">
                {firstPhotos.map(photo => (
                  <div key={photo.id} className="relative mr-4">
                    <Image
                      className="rounded-xl"
                      key={photo.id}
                      src={photo.images[0].source}
                      height="400"
                      width="300"
                      alt="1"
                      layout="fixed"
                    />
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                {secondPhotos.map(photo => (
                  <div key={photo.id} className="relative mr-4">
                    <Image
                      className="rounded-xl"
                      key={photo.id}
                      src={photo.images[0].source}
                      height="400"
                      width="300"
                      alt="1"
                      layout="fixed"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Testomonials />
      </main>

      <style jsx>{`
        .jumbotron {
          height: 550px;
          background: radial-gradient(
            circle at 50% -50%,
            #ddc253 0%,
            #161616 80%
          );
        }
      `}</style>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    'https://graph.facebook.com/112096071040835/photos?limit=100&fields=link,alt_text,images',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN}`,
      },
    }
  );

  const photos = await response.json();

  return {
    props: {
      firstPhotos: photos.data.slice(0, 50),
      secondPhotos: photos.data.slice(50),
    },
  };
};