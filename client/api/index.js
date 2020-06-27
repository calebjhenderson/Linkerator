import axios from 'axios';

export async function getLinks() {
  try {
    const { rows:links } = await axios.get(`./api/links`);
    return links;
  } catch (error) {
    throw error;
  }
}

export async function postLink(){
  try{
    const { rows:links } = await axios.post(`./api/links`);
    return links
  } catch (error) {
    throw error;
  }
}

export async function editLink() {
  try{
    const { rows:links } = await axios.patch(`./api/links/:id`);
    return links
  } catch (error){
    throw error;
  }
}

export async function deleteLink() {
  try{
    const { rows:links } = await axios.delete(`./api/links/linkid`)
    return links
  } catch (error){
    throw error;
  }
}





export async function getTags() {
    try {
      const { rows:tags } = await axios.get(`./api/tags`);
      return tags;
    } catch (error) {
      throw error;
    }
}

export async function getLinksByTag(){
  try{
    const{ rows:links } = await axios.get(`./api/tags/:tagName/links`)
    return links
  } catch(error){
    throw error
  }
}

export async function postTag(){
  try{
    const{ rows:tags } = await axios.post(`./api/tags`)
    return tags
  } catch(error){
    throw error
  }
}

//this link needs to be updated when the routes written.
export async function editTag(){
  try{
    const{ rows:tags } = await axios.patch(`./api/tags/tagId`)
    return tags
  } catch(error){
    throw error
  }
}
//this link needs to be updated when the routes written.
export async function deleteTag(){
  try{
    const{ rows:tags } = await axios.delete(`./api/tags/:tagId`)
    return tags
  } catch(error){
    throw error
  }
}






export async function getLinkTags() {
    try {
      const { rows:link_tags } = await axios.get(`./api/link_tags`);
      return link_tags;
    } catch (error) {
      throw error;
    }
  }
export async function postLinkTag() {
  try{
    const { rows:link_tags } = await axios.post(`./api/link_tags`);
    return link_tags;
  } catch(error){
    throw error;
  }
}
//this link needs to be updated when the routes written.
export async function editLinkTag() {
  try{
    const { rows:link_tags } = await axios.patch(`./api/link_tags/:link_tagId`)
    return link_tags;
  } catch(error){
    throw error;
  }
}
//this link needs to be updated when the routes written.
export async function deleteLinkTag() {
  try{
    const { rows:link_tags } = await axios.delete(`./api/link_tags/:link_tagId`)
    return link_tags;
  } catch(error){
    throw error
  }
}


