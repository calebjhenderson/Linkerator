import axios from 'axios';

export async function getLinks() {
  try {
    const { rows:links } = await axios.get(`/routes/links`);
    return links;
  } catch (error) {
    throw error;
  }
}

export async function postLink(){
  try{
    const { rows:links } = await axios.post(`/routes/links`);
     state.links=links
    return links
  } catch (error) {
    throw error;
  }
}

export async function editLink() {
  try{
    const { rows:links } = await axios.patch(`/routes/links/:id`);
    return links
  } catch (error){
    throw error;
  }
}

export async function deleteLink() {
  try{
    const { rows:links } = await axios.delete(`/routes/links/linkid`)
    return links
  } catch (error){
    throw error;
  }
}





export async function getTags() {
    try {
      const { rows:tags } = await axios.get(`/routes/tags`);
      return tags;
    } catch (error) {
      throw error;
    }
}

export async function getLinksByTag(){
  try{
    const{ rows:links } = await axios.get(`/routes/tags/:tagName/links`)
    return links
  } catch(error){
    throw error
  }
}

export async function postTag(){
  try{
    const{ rows:tags } = await axios.post(`/routes/tags`)
    return tags
  } catch(error){
    throw error
  }
}

//this link needs to be updated when the routes written.
export async function editTag(){
  try{
    const{ rows:tags } = await axios.patch(`/routes/tags/tagId`)
    return tags
  } catch(error){
    throw error
  }
}
//this link needs to be updated when the routes written.
export async function deleteTag(){
  try{
    const{ rows:tags } = await axios.delete(`/routes/tags/:tagId`)
    return tags
  } catch(error){
    throw error
  }
}






export async function getLinkTags() {
    try {
      const { rows:link_tags } = await axios.get(`/routes/link_tags`);
      return link_tags;
    } catch (error) {
      throw error;
    }
  }
export async function postLinkTag() {
  try{
    const { rows:link_tags } = await axios.post(`/routes/link_tags`);
    return link_tags;
  } catch(error){
    throw error;
  }
}
//this link needs to be updated when the routes written.
export async function editLinkTag() {
  try{
    const { rows:link_tags } = await axios.patch(`/routes/link_tags/:link_tagId`)
    return link_tags;
  } catch(error){
    throw error;
  }
}
//this link needs to be updated when the routes written.
export async function deleteLinkTag() {
  try{
    const { rows:link_tags } = await axios.delete(`/routes/link_tags/:link_tagId`)
    return link_tags;
  } catch(error){
    throw error
  }
}


