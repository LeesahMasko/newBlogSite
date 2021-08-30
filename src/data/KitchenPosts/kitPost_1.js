import React from "react";
import "./kitchenPosts.css";

function KitPost_1() {
  return (
    <div>
      <div className="blogHeaderKit">
        <span className="blogCategory">Kitchen blog post</span>
        <h1 className="postTitle">Let's Start at the Tipping Point</h1>
        <span className="postByandDate"> July 25, 2021</span>
      </div>
      <div className="postImageContainer">
        {/* <div className="textOnLeft">The weight crept on so slowly that I didn't really even notice it.  When I was about 35 I had one of those eye opening moments when I saw myself for what seemed like the first time.  I was in Switzerland and I had set off on a hike.  At some point, I set up the self-timer on my camera to snap a picture of myself along this lovely trail. When I downloaded the pictures, I saw my bulkyness is full view!  I think I hadn't really noticed it before, but there it was.  After that trip I decided it was time to make some changes.</div> */}

        <img
          className="kitchenImage"
          src="../../../BlogPostImages/kitchen.jpg"
          alt="cooking in the kitchen"
        />
      </div>
      <div className="postContent">
        <p>I don't think there is any one perfect way to eat...</p>
        <p>I wish there was.</p>
        <p>
          My goal here is to give you the tips, recipes and information that
          actually helped me.
        </p>

        <h3>Facing the facts. Things had slowly gotten out of hand.</h3>
        <p>
          I was always scrawny growing up. My family didn't eat unhealthy, per
          se... we ate frugally. There were 6 kids in my family so dinners were
          often filled with the cheapest hamburger meat available. We drank
          milk, ate bread, our cheese was always orange & came in giant bag from
          Costco, and pancakes were a staple.
        </p>
        <p>
          We always had a vegetable at dinner. Most the time there were prepared
          in such way that made them increasingly more unappetising than if you
          ate them just picked from the garden with dirt and bugs. (Think
          zucchini cooked in a pan with butter until it became green glop)
        </p>
        <p>
          I was pretty skinny until I got to about 25 years old, then I slowly
          started to again some extra padding all over.
        </p>
        <p>
          The weight crept on so slowly that I didn't really even notice it.
          When I was 32 I had one of those eye opening moments when I saw myself
          for what seemed like the first time. I was in Switzerland and I had
          set off on a hike. At some point, I set up the self-timer on my camera
          to snap a picture of myself along this lovely trail. When I downloaded
          the pictures, I saw my bulkyness is full view! I think I hadn't really
          noticed it before, but there it was. After that trip I decided it was
          time to make some changes.
        </p>
        <div className="postImageContainer">
          <img
            className="kitchenImage"
            src="../../../BlogPostImages/SwissHike.jpg"
            alt="cooking in the kitchen"
          />
        </div>
        <p>
          The first obligatory step... facing the scale. I needed to see what my
          starting point was.
        </p>
        <p>181 pounds. A shocking number to read.</p>
        <p>
          I calculated my BMI: 30.1 Then I looked at the BMI
          Categories..."Obesity = BMI of 30 or greater" I was considered to by
          obese. Oof!
        </p>
        <p></p>
      </div>
    </div>
  );
}
export default KitPost_1;
