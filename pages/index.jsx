import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../src/components/Layout";
import HomeHero from "../src/components/HomeHero";
import HomeAbout from "../src/components/HomeAbout.jsx";
import HomeServices from "../src/components/HomeServices";
import HomeDoctor from "../src/components/HomeDoctor";
import HomeContact from "../src/components/HomeContact";
import HomeAppointment from "../src/components/HomeAppointment";
import { adminPath } from '../utils/constants'
import { jwtToken } from '../utils/constants';

export default function Home({ siteData, pageData, servicesData, navCat }) {
  return (
    <div>
      <Layout data={siteData} SeoData={pageData?.seo} navServices={servicesData} navCat={navCat}>
        <HomeHero data={pageData?.hero} />
        <HomeAbout data={pageData?.about} />
        <HomeServices data={pageData?.service} />
        <HomeAppointment data={pageData?.form} servicesData={servicesData} />
        <HomeDoctor data={pageData?.doctor} />
        <HomeContact data={pageData?.map} />
      </Layout>
    </div>
  );
}
export async function getStaticProps() {
  let pageData = null;
  let siteData = null;
  let servicesData = null;
  let navCat = null;
	let bearer = "Bearer " + jwtToken


  try {
    servicesData = await (
      await fetch(`${adminPath}/our-services?fields[0]=title&fields[1]=slug&populate[4]=services_category`,{
				method: "GET",
				withCredentials: true,
				credentials: "include",
				headers: {
				  Authorization: bearer,
				},
			  })
    ).json();
    navCat = await (await fetch(`${adminPath}/services-categories?fields[0]=name`,{
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: bearer,
      },
      })).json();

    pageData = await (await fetch(`${adminPath}/home?populate=deep`,{
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: bearer,
      },
      })).json();
    siteData = await (await fetch(`${adminPath}/site?populate=deep`,{
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: bearer,
      },
      })).json();

  } catch (err) { }
  return {
    props: {
      pageData: pageData?.data?.attributes || "null",
      siteData: siteData?.data?.attributes || "null",
      servicesData:
        servicesData?.data?.sort(
          (a, b) =>
            new Date(b.attributes.publishedDate) -
            new Date(a.attributes.publishedDate)
        ) || null,
      navCat: navCat?.data?.sort(
        (a, b) =>
          new Date(a.attributes.createdAt) -
          new Date(b.attributes.createdAt)
      ) || null,
    },
  };
}
