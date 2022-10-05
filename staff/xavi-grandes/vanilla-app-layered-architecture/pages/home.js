var homeHeader = document.createElement("header");

var homeButtonMenu = document.createElement("button");

var homeSpanMenu = document.createElement("span");
homeSpanMenu.className = "material-symbols-outlined";
homeSpanMenu.innerText = "menu";

var homeNav = document.createElement("nav");
homeNav.className = "burguer-list";

var homeButtonProfile = document.createElement("button");

var homeButtonExit = document.createElement("button");
homeButtonExit.innerText = "Log out";

var homeSpanExit = document.createElement("span");
homeSpanExit.className = "material-symbols-outlined";
homeSpanExit.innerText = "exit_to_app";

var homeSection = document.createElement("section");

var homeParagraph = document.createElement("p");
homeParagraph.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque saepe in voluptates, inventore ratione laboriosam debitis cupiditate aspernatur ex tenetur atque nemo et totam soluta dolor facilis, laudantium fuga! Commodi! Atque repellat suscipit rerum illum autem repudiandae nihil ad inventore consequatur. Rem, unde sint. Mollitia sint accusamus cum ex iure molestias quas voluptas, deserunt magni omnis repellat, voluptate consequatur vero.Accusantium provident expedita consequatur eos ducimus neque iure fugit maiores dolor temporibus eveniet blanditiis unde veritatis quam aliquid doloremque aperiam odio voluptatum iusto labore, dolorem dicta impedit nostrum. Et, sit. Magnam laboriosam rem non! Consectetur beatae, cupiditate veritatis impedit similique atque dolore! Eligendi adipisci, soluta officiis neque nesciunt exercitationem eos ratione accusantium deserunt quas similique, ab architecto sequi ipsa commodi. Illo quis maxime veniam fugit? Tenetur quam nemo voluptatibus quidem totam deserunt, mollitia placeat nobis quod inventore nihil saepe expedita! Minima suscipit molestias voluptatibus! Provident consequatur nihil excepturi quas? Ducimus! Sunt dolores veniam suscipit nemo rem obcaecati voluptas at, nulla maxime quae iste aliquam, enim ex. Non, nesciunt. Iste error repudiandae quo quia eum, laborum tenetur quam quibusdam voluptas soluta! Et odio labore quo velit porro accusantium dolore aut assumenda sapiente nihil excepturi totam, repellendus dicta omnis aliquid mollitia deserunt consequuntur tempora possimus dolores aliquam dolor incidunt illo recusandae. Deleniti! Quidem recusandae aut officiis eum temporibus quas impedit minima repellendus asperiores dolorum, reiciendis debitis, blanditiis repudiandae? Magnam, inventore reiciendis neque rem eum dolorum, odit molestias quae, est eaque vero laboriosam! Explicabo placeat illo quia sint fuga esse eligendi numquam ab perferendis corporis laudantium nesciunt repellendus maiores, alias beatae tenetur a officia ipsa iste provident animi est! Animi dolore unde quaerat? Fuga impedit veniam nesciunt nemo exercitationem repu";

// el operador no deja contener más texto

homeHeader.append(homeButtonMenu, homeNav);
homeButtonMenu.append(homeSpanMenu);
homeNav.append(homeButtonProfile, homeButtonExit);
homeButtonExit.append(homeSpanExit);
homeSection.append(homeParagraph);
// body.append(homeHeader, homeSection)
