const bodyParser = require('body-parser');
var posts = [
  { 
    title: "Home",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, necessitatibus nobis. Quo neque necessitatibus dolor dolorum quas molestias rem minima omnis sapiente, velit delectus. Optio, perferendis. Ipsam voluptas provident sequi, excepturi doloremque adipisci? Aliquam culpa deleniti, ut veritatis voluptates tempore itaque tempora accusamus rem est deserunt iusto dolor modi eveniet sequi molestias error eius beatae aut magni ex labore natus quas? Sunt voluptatem mollitia tenetur inventore magni laboriosam quibusdam illo nulla repellat deleniti ab, odit atque praesentium, deserunt officia porro sint ducimus ipsum explicabo in tempore non sapiente facere. Ad non ratione perspiciatis delectus amet labore in ipsa, possimus sequi deserunt pariatur iste adipisci, at porro eius alias temporibus? Ab ad in, optio dolor, rerum, quos iste vitae asperiores unde aperiam laudantium beatae praesentium. Animi nulla nam in accusantium dolor. Porro perspiciatis praesentium possimus assumenda deleniti sunt consequatur fugiat quam, labore provident similique! Molestiae magnam vitae quia reprehenderit quo delectus. Optio magni natus asperiores qui veniam! Vel commodi nulla eveniet esse! Accusamus facilis neque voluptatem veniam, nemo obcaecati debitis atque necessitatibus eius rem accusantium! Soluta accusamus explicabo recusandae labore fuga nesciunt, eum hic! Labore iusto iure aut eum, doloremque necessitatibus error nobis, molestiae id animi delectus. Dignissimos debitis sapiente sint amet asperiores nisi laboriosam aspernatur quisquam eius facere, dolorem, eum neque? Veritatis, quidem maiores deserunt iure explicabo, esse itaque velit recusandae beatae ea asperiores labore maxime eligendi magni reprehenderit accusantium ut, ipsam quam quasi tempora eaque cumque numquam. Laboriosam perferendis delectus atque qui alias est?"
  }
];






exports.index = function(req,res){
  res.render('posts/index', { posts })
}
exports.show = function(req,res){
  if(posts[req.params.postId]){
    res.render('posts/show', {post: posts[req.params.postId]})
  } else{
    res.redirect('/404.html');
  }
}
exports.compose = function(req,res){
  res.render('posts/compose');
}
exports.create = function(req,res){
  posts.push({title: req.body.title, body: req.body.body});
  res.redirect('/posts');
}