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

export async function postLink(){
  try{
    const { rows:links } = await axios.post(`${ BASE }/links`);
    return links
  } catch (error) {
    throw error;
  }
}

export async function editLink() {
  try{
    const { rows:links } = await axios.patch(`${ BASE}/links/:id`);
    return links
  } catch (error){
    throw error;
  }
}

export async function deleteLink() {
  try{
    const { rows:links } = await axios.delete(`${BASE}/links/linkid`)
    return links
  } catch (error){
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

export async function getLinksByTag(){
  try{
    const{ rows:links } = await axios.get(`${ BASE }/tags/:tagName/links`)
    return links
  } catch(error){
    throw error
  }
}

export async function postTag(){
  try{
    const{ rows:tags } = await axios.post(`${ BASE }/tags`)
    return tags
  } catch(error){
    throw error
  }
}

//this link needs to be updated when the routes written.
export async function editTag(){
  try{
    const{ rows:tags } = await axios.patch(`${ BASE }/tags/tagId`)
    return tags
  } catch(error){
    throw error
  }
}
//this link needs to be updated when the routes written.
export async function deleteTag(){
  try{
    const{ rows:tags } = await axios.delete(`${ BASE }/tags/:tagId`)
    return tags
  } catch(error){
    throw error
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
export async function postLinkTag() {
  try{
    const { rows:link_tags } = await axios.post(`${ BASE }/link_tags`);
    return link_tags;
  } catch(error){
    throw error;
  }
}
//this link needs to be updated when the routes written.
export async function editLinkTag() {
  try{
    const { rows:link_tags } = await axios.patch(`${ BASE }/link_tags/:link_tagId`)
    return link_tags;
  } catch(error){
    throw error;
  }
}
//this link needs to be updated when the routes written.
export async function deleteLinkTag() {
  try{
    const { rows:link_tags } = await axios.delete(`${ BASE }/link_tags/:link_tagId`)
    return link_tags;
  } catch(error){
    throw error
  }
}


