import React from "react";
import BlogBody from "../../src/components/Common/BlogBody";
import BlogDetailLogo from "../../src/components/Common/BlogDetailLogo";
import CommonHero from "../../src/components/Common/CommonHero";
import Layout from "../../src/components/Layout";
import { adminPath } from "../../utils/constants";
import Appointment from "../../src/components/Common/Appointment";
import { jwtToken } from "../../utils/constants";

const myData ={
  headline: "Make an appointment",
  tagline: "Complete the form and we will send you a confirmation within 24 hours.",
  cta:
    {name:"Visit Appointment Form",
    link:"/contacts"
  }
  
}



const Index = ({ siteData, singleBlog, servicesData, navCat }) => {
  return (
    <Layout data={siteData} SeoData={singleBlog?.seo} navServices={servicesData} navCat={navCat}>
      <CommonHero data={singleBlog} />
      <BlogBody data={singleBlog.body} cusClass={"cus-our-survices"} cusClassName={"cus-our-survice-detail"}/>
      <Appointment data={myData}/>
    </Layout>
  );
};

export default Index;

export async function getStaticPaths() {
	let bearer = "Bearer " + jwtToken
  const ourBlogs = await (
    await fetch(`${adminPath}/our-services?fields[0]=slug`,{
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: bearer,
      },
      })
  ).json();

  const paths = await ourBlogs?.data?.map((post) => {
    return {
      params: { slug: `${post?.attributes?.slug}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
	let bearer = "Bearer " + jwtToken
  const slug = context?.params?.slug;
  const singleBlog = await (
    await fetch(`${adminPath}/our-services/${slug}?populate=deep`,{
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: bearer,
      },
      })
  ).json();
  const siteData = await (
    await fetch(`${adminPath}/site?populate=deep`,{
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: bearer,
      },
      })
  ).json();
  const servicesData = await (
    await fetch(`${adminPath}/our-services?fields[0]=title&fields[1]=slug&populate[4]=services_category`,{
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: bearer,
      },
      })
  ).json();
  const navCat = await (await fetch(`${adminPath}/services-categories?fields[0]=name`,{
    method: "GET",
    withCredentials: true,
    credentials: "include",
    headers: {
      Authorization: bearer,
    },
    })).json();
  return {
    props: {
      singleBlog: singleBlog?.data?.attributes || null,
      siteData: siteData?.data?.attributes,
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
