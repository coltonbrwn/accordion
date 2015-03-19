Handlebars.registerPartial("coupons", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"container coupons\">\n\n  <div class=\"content\">\n    \n    <div class=\"header\">\n      <span class=\"title\">\n        coupons\n      </span>\n      <span class=\"number\">\n        28\n      </span>\n    </div>\n\n    <span class=\"posted-by\">Posted by <strong>Honey</strong></span>\n\n    <div class=\"honey-coupon\">\n      <div class=\"list-item deal\">      \n        <div class=\"icon\">\n          <i class=\"ss-icon\">&#x2B07;</i>\n        </div>\n        <div class=\"code\">COD34U</div>\n        <div class=\"description\">\n          Extra 25% Off $100 On Sale & Clearance Items Free Shipping\n        </div>\n        <div class=\"expiration\">\n          exp: 3/1/2015\n        </div>\n      </div>\n    </div>\n\n    <div class=\"honey-coupon\">\n      <div class=\"list-item deal\">      \n        <div class=\"icon\">\n          <i class=\"ss-icon\">&#x2B07;</i>\n        </div>\n        <div class=\"code\">COD34U</div>\n        <div class=\"description\">\n          Extra 25% Off $100 On Sale & Clearance Items Free Shipping\n        </div>\n        <div class=\"expiration\">\n          exp: 3/1/2015\n        </div>\n      </div>\n    </div>\n\n    <span class=\"posted-by\">Posted by <strong>dandeman</strong></span>\n\n    <div class=\"quest-coupon\">\n      <div class=\"list-item deal\">\n        <div class=\"icon\">\n          <i class=\"ss-icon\">&#x2B07;</i>\n        </div>\n        <div class=\"description\">\n          15% off with <span class=\"code\">COD34U</span>\n        </div>\n      </div>\n      <div class=\"details\">details</div>\n    </div>\n\n\n    <span class=\"posted-by\">Posted by <strong>denmark</strong></span>\n\n    <div class=\"quest-coupon\">\n      <div class=\"list-item deal\">\n        <div class=\"icon\">\n          <i class=\"ss-icon\">&#x2B07;</i>\n        </div>\n        <div class=\"description\">\n          15% off with <span class=\"code\">COD34U</span>\n        </div>\n      </div>\n      <div class=\"details\">details</div>\n    </div>\n\n  </div>\n\n  <div class=\"view-all\">\n    view all\n  </div>\n\n</div>";
},"useData":true}));
Handlebars.registerPartial("icavailable", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"container icavailable\">\n\n  <div class=\"content\">\n\n    <h1>Honey instant cash available</h1>\n\n    <div class=\"list-item ic-store\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        Macy's\n      </div>\n    </div>\n\n    <div class=\"list-item ic-store\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        bloomingdales\n      </div>\n    </div>\n\n    <div class=\"list-item ic-store\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        Bonobos\n      </div>\n    </div>\n\n    <div class=\"list-item ic-store\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        JCPenny\n      </div>\n    </div>\n\n    <div class=\"list-item ic-store\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        bloomingdales\n      </div>\n    </div>\n\n    <div class=\"list-item ic-store\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        Bonobos\n      </div>\n    </div>\n\n    <div class=\"list-item ic-store\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        JCPenny\n      </div>\n    </div>\n\n    <div class=\"list-item ic-store\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        bloomingdales\n      </div>\n    </div>\n\n    <div class=\"list-item ic-store\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        Bonobos\n      </div>\n    </div>\n\n    <div class=\"list-item ic-store\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        JCPenny\n      </div>\n    </div>\n\n    <div class=\"list-item ic-store\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        bloomingdales\n      </div>\n    </div>\n\n    <div class=\"list-item ic-store\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        Bonobos\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"view-all\">\n    view all\n  </div>\n\n</div>";
},"useData":true}));
Handlebars.registerPartial("main", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"container main\">\n\n  <div class=\"ext-navbar\">\n    <a class=\"icon notifs\">\n      <i class=\"ss-icon\">&#x1F514;</i>\n    </a>\n    <span class=\"logo\">\n      <img src=\"../assets/logo_70.png\"/>\n    </span>\n    <a class=\"icon close\">\n      <i class=\"ss-icon\">&#x2421;</i>\n    </a>\n    <div id=\"notifs\" hidden>\n      These are your notifications\n    </div>\n  </div>\n\n  <div class=\"list-item product\">\n    <span class=\"image\">\n      <img src=\"http://c426931.r31.cf0.rackcdn.com/110RLB9903.jpg\"/>\n    </span>\n    <span class=\"title\">\n      <p>Rollerblade Swindler Skates that are fun to skate on</p>\n    </span>\n    <span class=\"price\">\n      <span class=\"value\">\n        $113.00\n      </span>\n      <span class=\"verified\">\n        <i class=\"ss-icon\">&#x2713;</i>\n      </span>\n    </span>\n  </div>\n\n  <div class=\"tabs\">\n    <div class=\"tab active\">\n      <div class=\"tab-handle\">\n        <span class=\"badge\">5%</span>\n        <span class=\"title\">instant cash available</span>\n        <span class=\"icon\">\n          <i class=\"ss-icon\">&#x27A1;</i>\n        </span>\n      </div>\n      <div class=\"tab-content instant-cash-zone\">\n        <div class=\"percentage\">\n          5%\n        </div>\n        <div class=\"ic-prompt\">\n          instant cash\n        </div>\n        <button class=\"activate\">\n          ACTIVATE\n        </button>\n        <div class=\"expires\">\n          EXPIRES IN 3 HOURS\n        </div>\n      </div>\n    </div>\n    <div class=\"tab\">\n      <div class=\"tab-handle\">\n        <span class=\"badge\">3</span>\n        <span class=\"title\">coupons</span>\n        <span class=\"icon\">\n          <i class=\"ss-icon\">&#x27A1;</i>\n        </span>\n      </div>\n      <div class=\"tab-content\">\n"
    + ((stack1 = this.invokePartial(partials.coupons,depth0,{"name":"coupons","data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "      </div>\n    </div>\n\n    <div class=\"tab\">\n      <div class=\"tab-handle\">\n        <span class=\"badge\">23</span>\n        <span class=\"title\">sales</span>\n        <span class=\"icon\">\n          <i class=\"ss-icon\">&#x27A1;</i>\n        </span>\n      </div>\n      <div class=\"tab-content\">\n"
    + ((stack1 = this.invokePartial(partials.sales,depth0,{"name":"sales","data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "      </div>\n    </div>\n\n    <div class=\"tab\">\n      <div class=\"tab-handle\">\n        <span class=\"badge\">\n          <img src=\"http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg\"/>\n        </span>\n        <span class=\"title\">millybee</span>\n        <span class=\"icon\">\n          <i class=\"ss-icon\">&#x27A1;</i>\n        </span>\n      </div>\n      <div class=\"tab-content\">\n"
    + ((stack1 = this.invokePartial(partials.profile,depth0,{"name":"profile","data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "      </div>\n    </div>\n  </div>\n\n</div>";
},"usePartial":true,"useData":true}));
Handlebars.registerPartial("profile", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"container profile\">\n  <div class=\"content loggedout\">\n\n    <h1> Activate Exclusive Deals </h1>\n\n    <div class=\"form login-form\">\n      <input type=\"email\" placeholder=\"username or email\"/>\n      <input type=\"password\" placeholder=\"password\"/>\n      <button class=\"submit\">log in</button>\n      <button class=\"switch\">register</button>\n    </div>\n\n    <div class=\"form register-form active\">\n      <input type=\"email\" placeholder=\"email\"/>\n      <input type=\"text\" placeholder=\"username\"/>\n      <input type=\"password\" placeholder=\"password\"/>\n      <button class=\"submit\">register</button>\n      <button class=\"switch\">log in</button>\n    </div>\n  </div>\n\n  <div class=\"profile-footer\">\n    <div class=\"ext-links\">\n      <a href=\"javascript:;\">settings</a>\n      <a href=\"javascript:;\">account</a>\n    </div>\n  </div>\n</div>";
},"useData":true}));
Handlebars.registerPartial("profile_loggedin", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"container profile\">\n\n  <div class=\"user-image\">\n    <img src=\"http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg\"/>\n    <h2>Natalie Smith</h2>\n  </div>\n\n  <div class=\"content\">\n    <div class=\"username\">\n      Natsmiles\n    </div>\n    <div class=\"bio\">\n      I like the stuff that helps me do the stuff I like to do a lot and stuff like that. Yeah, you knaw?\n    </div>\n    <div class=\"list-item profile\">\n      <span class=\"icon\">\n        <i class=\"ss-icon\">&#x27A1;</i>\n      </span>\n      <span class=\"number\">239</span>\n      <span class=\"description\">products</span>\n    </div>\n    <div class=\"list-item profile\">\n      <span class=\"icon\">\n        <i class=\"ss-icon\">&#x27A1;</i>\n      </span>\n      <span class=\"number\">43</span>\n      <span class=\"description\">followers</span>\n    </div>\n    <div class=\"list-item profile\">\n      <span class=\"icon\">\n        <i class=\"ss-icon\">&#x27A1;</i>\n      </span>\n      <span class=\"number\">50</span>\n      <span class=\"description\">following</span>\n    </div>\n  </div>\n\n  <div class=\"profile-footer\">\n    <div class=\"ext-links\">\n      <a href=\"javascript:;\">settings</a>\n      <a href=\"javascript:;\">account</a>\n    </div>\n  </div>\n</div>";
},"useData":true}));
Handlebars.registerPartial("sales", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"container sales\">\n\n  <div class=\"content\">\n\n    <div class=\"header\">\n      <span class=\"title\">\n        sales\n      </span>\n      <span class=\"number\">\n        34\n      </span>\n    </div>\n\n    <div class=\"list-item deal\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        Select Adidas Men's Originals SL Loop Runner Sneakers starting at $59.98\n      </div>\n    </div>\n\n    <div class=\"list-item deal\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        50% off First Impressions Tops and Bottoms\n      </div>\n    </div>\n\n    <div class=\"list-item deal\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        This is an test for extremely long descriptions to make sure that they fit inside the design, This is an test for extremely long descriptions to make sure that they fit inside the design\n      </div>\n    </div>\n\n    <div class=\"list-item deal\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        Select Adidas Men's Originals SL Loop Runner Sneakers starting at $59.98\n      </div>\n    </div>\n\n    <div class=\"list-item deal\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        50% off First Impressions Tops and Bottoms\n      </div>\n    </div>\n\n    <div class=\"list-item deal\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        Select Adidas Men's Originals SL Loop Runner Sneakers starting at $59.98\n      </div>\n    </div>\n\n    <div class=\"list-item deal\">      \n      <div class=\"icon\">\n        <i class=\"ss-icon\">&#x21AA;</i>\n      </div>\n      <div class=\"description\">\n        50% off First Impressions Tops and Bottoms\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"view-all\">\n    view all\n  </div>\n\n</div>";
},"useData":true}));