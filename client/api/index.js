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

//These id links need to be updated when the routes written.
export async function editTag(){
  try{
    const{ rows:tags } = await axios.patch(`/routes/tags/tagId`)
    return tags
  } catch(error){
    throw error
  }
}

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

export async function editLinkTag() {
  try{
    const { rows:link_tags } = await axios.patch(`/routes/link_tags/:link_tagId`)
    return link_tags;
  } catch(error){
    throw error;
  }
}

export async function deleteLinkTag() {
  try{
    const { rows:link_tags } = await axios.delete(`/routes/link_tags/:link_tagId`)
    return link_tags;
  } catch(error){
    throw error
  }
}




//>>>>>>>>>>>>>>>>>>>>>TEST FUNC FOR BOOKMARK DATA>>>>>>>>>>>>>>>>>>>>>>>>>
const twitter = {
  comment: "Twitter is cool",
  id: "1",
  imageUrl: "https://help.twitter.com/content/dam/help-twitter/brand/logo.png",
  name: "Twitter",
  tag: "tweet tweet",
  url: "twitter.com",
}
const google = {
  comment: "Google is possibly cooler",
  id: "2",
  imageUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  name: "Google",
  tag: "google goog",
  url: "google.com",
}
export async function fetchBookmarks(props) {
  return [
    twitter,
    google,
  ];
}

export async function fetchLinks () {
  try {
      const { data } = await axios.get('http://localhost:3000/api/links')
      console.log(data);
      return data;
  } catch (error) {
      throw error;
  }
}


