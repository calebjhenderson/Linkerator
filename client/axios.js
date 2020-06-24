import axios from 'axios';

const BASE = 'https://localhost3000.com'


export async function getLinks() {
  try {
    const { rows:links } = await axios.get(`${ BASE }/links`);
    return links;
  } catch (error) {
    throw error;
  }
}

export async function getTags() {
    try {
      const { rows:tags } = await axios.get(`${ BASE }/tags`);
      return tags;
    } catch (error) {
      throw error;
    }
  }


export async function getLinkTags() {
    try {
      const { rows:link_tags } = await axios.get(`${ BASE }/link_tags`);
      return link_tags;
    } catch (error) {
      throw error;
    }
  }


  module.exports = {getLinks, getTags, getLinkTags}

