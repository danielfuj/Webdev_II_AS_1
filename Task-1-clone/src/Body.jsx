import React, { useState } from 'react';
import './Body.css';
function Body() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'soundseeker92',
      text: "This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work. I wonder what you think about their older stuff?"
    },
    {
      id: 2,
      name: 'Ted Baker',
      text: "I've been following the label for years—so glad someone's finally writing about their impact."
    },
    {
      id: 3,
      name: 'Queen_of_noise',
      text: "I discovered Erased Tapes through Ólafur Arnalds—this article brought back memories and be and my friends listening together. A bit too poetic for my taste, but still compelling."
    }
  ]);

  const [newComment, setNewComment] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([
      ...comments,
      { id: Date.now(), name: 'guest_user', text: newComment }
    ]);
    setNewComment('');
  };

  return (
    <main className="content-container">
      {/* Title and Main Paragraph */}
      <section className="article-header">
        <h1 className="main-title">Erased Tapes:</h1>
        <h2 className="main-subtitle">Exploring the Sonic Frontier</h2>
        <p className="lead-paragraph">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Mi eu scelerisque turpis posuere tempor? Leo condimentum himenaeos molestie elit; maximus iaculis proin nulla. Ullamcorper nibh cras conubia suscipit dapibus sagittis, facilisi habitant vivamus. Etiam fusce posuere himenaeos ipsum commodo sollicitudin himenaeos nec.
        </p>
      </section>

      {/* 3-column grid identical to the wireframe */}
      <section className="text-grid">
        {/* Column 1 */}
        <div className="text-col">
          <h3 className="section-heading">Heading</h3>
          <p>
            Montes ridiculus mus tellus nunc vulputate. Cras facilisi congue et facilisis porttitor litora etiam praesent porttitor. Sollicitudin cubilia scelerisque diam taciti lacus. Dapibus penatibus augue dapibus sagittis; rhoncus accumsan. Accumsan urna et, ultrices placerat justo rutrum. Tristique mattis ante cras accumsan convallis phasellus fermentum magna. Rhoncus curabitur pharetra proin ante nam adipiscing accumsan hac. Rutrum efficitur nullam integer ut ex id. Pulvinar vel at vestibulum vivamus sed nascetur eget.
          </p>
          <p>
            Laoreet volutpat hendrerit est aliquam; fusce quam tempor. Nisi interdum praesent pellentesque non non blandit cubilia et. Aptent maximus vehicula nullam odio tempor. Placerat dis facilisis potenti iaculis, primis vivamus nec at magnis. Aadipiscing curabitur vestibulum imperdiet dolor primis. Inceptos penatibus inceptos eu habitasse aptent vehicula platea litora congue. Ultricies mauris fringilla rhoncus pharetra iaculis vitae. Venenatis himenaeos eget molestie dignissim consectetur tellus litora. Porta a iaculis mi primis rhoncus.
          </p>
          <p>
            Curae habitasse elementum amet nunc, natoque at. Tortor vel blandit sociosqu auctor aliquam maximus porta feugiat. Eros phasellus platea mauris condimentum natoque hendrerit tellus id. Ex imperdiet vitae maximus adipiscing neque quam tempor orci. Lobortis porta lacinia cubilia tellus vel placerat; facilisis mi euismod. Neque eu orci nulla penatibus elit nec.
          </p>
          <p>
            Parturient habitasse facilisis purus donec, enim platea maximus. Primis class varius augue sed class ultricies. Posuere curabitur tristique penatibus montes hac ac imperdiet. Risus per sociosqu, cursus leo condimentum ac fringilla. Nibh curabitur eros tempus nec; nam curae hendrerit. Mattis placerat maximus mollis praesent, eros adipiscing dui.
          </p>
        </div>

        {/* Column 2 */}
        <div className="text-col">
          <p>
            Habitasse ornare fames facilisis montes pulvinar habitasse fringilla. Risus porta cursus duis vivamus quam adipiscing nec. Ante at posuere eget aptent natoque vivamus ante. Aenean enim dapibus viverra sem efficitur. Felis nam semper integer justo in. Facilisi augue urna torquent lacinia facilisi inceptos. Natoque varius feugiat massa scelerisque natoque, cras tempor inceptos.
          </p>
          <p>
            Amet ac leo, imperdiet hac litora auctor. Suscipit congue duis sociosqu auctor euismod vivamus urna diam. Nunc enim himenaeos litora facilisi, tincidunt torquent. Eros sapien laoreet duis, volutpat rutrum pulvinar. Natoque semper sapien aptent quis habitant aliquam condimentum luctus. Tempus pellentesque congue varius dapibus pharetra. Fermentum diam auctor bibendum rhoncus leo. Vestibulum tincidunt fames convallis ligula semper porttitor.
          </p>
          <h3 className="section-heading">Heading</h3>
          <p>
            Magnis maximus morbi, litora accumsan vivamus facilisi etiam pharetra. Platea congue orci sagittis purus scelerisque. Velit taciti maecenas praesent nam lobortis metus vehicula habitasse porttitor. Porta gravida placerat lobortis litora elit feugiat venenatis. Cras magna himenaeos consequat aliquet ad nec pharetra. Ligula eleifend imperdiet aptent primis placerat. Nec magnis tempus vulputate ipsum ad sagittis mus.
          </p>
        </div>

        {/* Column 3 */}
        <div className="text-col">
          <h3 className="section-heading">Heading</h3>
          <p>
            Vulputate nullam tempus montes eu tellus integer adipiscing pulvinar. Pharetra eu luctus id a potenti. Pulvinar egestas conubia ante varius lobortis iaculis metus. Netus sem imperdiet hendrerit vehicula netus est gravida tortor. Nunc ridiculus per montes nulla, facilisis lacinia per leo. Hendrerit scelerisque nulla in suspendisse sit tortor sagittis. Suscipit dictumst ipsum laoreet cras egestas suscipit orci. Per molestie felis erat platea blandit commodo.
          </p>
          <p>
            Ad venenatis sapien habitant posuere donec porttitor vel nisi. Sodales laoreet donec diam rhoncus lectus euismod orci torquent curae. Fames rhoncus torquent sed convallis; potenti cras. Dictumst arcu libero nulla malesuada mi ridiculus platea. Interdum ullamcorper fringilla himenaeos mollis; in arcu pharetra massa. Nunc mauris taciti montes sapien molestie orci ac quis.
          </p>
        </div>
      </section>

      {/* Image Gallery (1 large + 2x2 grid) */}
      <section className="image-gallery">
        <div className="large-image-box">
          <img src="/all-encores.jpg" alt="All Encores" />
        </div>
        <div className="small-image-grid">
          <div className="small-img-box"><img src="/articulation.jpg" alt="Articulation" /></div>
          <div className="small-img-box"><img src="/blurred.jpg" alt="Blurred" /></div>
          <div className="small-img-box"><img src="/encores-2.jpg" alt="Encores 2" /></div>
          <div className="small-img-box"><img src="/eulogy-for-evolution.jpg" alt="Eulogy for Evolution" /></div>
        </div>
      </section>

      {/* Author Section */}
      <section className="author-section">
        <div className="author-info">
          <h3 className="author-heading">The Author</h3>
          <p>
            Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend a nam sit turpis nostra. Tempus suspendisse libero curae faucibus lobortis litora bibendum praesent! Eget quam magna, diam commodo interdum sapien magnis.
          </p>
        </div>
        <div className="author-media">
          <img src="/profile_picture.jpg" alt="Author Profile" className="author-photo" />
          <div className="author-socials">
            <img src="/twitter-icon.svg" alt="Twitter" className="social-icon" />
            <img src="/instagram-icon.svg" alt="Instagram" className="social-icon" />
            <img src="/facebook-icon.png" alt="Facebook" className="social-icon" />
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="comments-section">
        <h3 className="comments-heading">Comments</h3>

        <form onSubmit={handleAddComment} className="comment-form">
          <input 
            type="text" 
            placeholder="Add a comment..." 
            value={newComment} 
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit">Post</button>
        </form>

        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <span className="comment-username">{comment.name}</span>
              <p className="comment-text">{comment.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Body;