import React from "react";
import CommonHero from "../src/components/Common/CommonHero";
import SocialTags from "../src/components/Common/SocialTags";
import ContactDetail from "../src/components/ContactDetail";
import Layout from "../src/components/Layout";
import { adminPath } from '../utils/constants';
import { jwtToken } from '../utils/constants';

export default function Contacts({siteData, pageData , servicesData, navCat}) {
  return (
    <div>
      <Layout data={siteData} SeoData={pageData?.seo} navServices={servicesData} navCat={navCat}>
        <CommonHero data={pageData?.hero}/>
        <SocialTags />
        <ContactDetail servicesData={servicesData}/>
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
    pageData = await (await fetch(`${adminPath}/contact?populate=deep`,{
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
  } catch (err) {}
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