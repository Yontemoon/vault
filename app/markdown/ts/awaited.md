# Awaited

### November 2nd, 2024

---

```ts
/**
 * * Removes the promise from any promise type.
 * * From what I can see for use cases, great for helper functions that are
 * * used in async functions
 */

async function doSomething() {
  // Does something like await fetch(url)
  return {
    name: "Monte",
    age: 26,
  };
}
```

## Heading 2

Lorem ipsum odor amet, consectetuer adipiscing elit. Ac nascetur mollis ultricies porttitor dictum, torquent lacus sit. Mauris aliquam phasellus rutrum condimentum arcu ipsum. Condimentum nunc venenatis enim etiam suspendisse. Tortor torquent ridiculus lacinia elit potenti suspendisse vestibulum semper consectetur. Fames ligula litora dui habitant orci justo. Donec himenaeos volutpat venenatis lectus fermentum netus.

Turpis pulvinar dignissim aptent proin eu `purus` sociosqu nulla. Tempus dignissim dui nisl porttitor fermentum adipiscing. Blandit conubia convallis orci class ultrices egestas. Platea egestas fermentum taciti nam gravida. Ligula mus ante gravida dictum dictum est viverra varius torquent? Gravida mi mattis metus mus ligula quam eleifend consequat. Per libero imperdiet netus sagittis pulvinar tempor nunc rhoncus viverra.

Scelerisque nec elementum dolor sociosqu fusce in, cursus lacus `etiam`. Ultrices torquent ultrices etiam laoreet sagittis venenatis. Malesuada pharetra mauris dignissim mollis sociosqu urna; tincidunt tellus habitant. Duis posuere tempor velit ut nostra. Per proin aptent quam erat euismod dictum. Iaculis aliquet risus mi faucibus vulputate fringilla nostra. Felis dis ac tortor dolor natoque tempus. Aptent donec non; elit justo primis ornare condimentum litora. Molestie posuere nibh fringilla rutrum convallis purus.

Dui nulla sociosqu id porttitor curabitur bibendum neque. Adipiscing praesent mi luctus tristique tempus magnis. Nostra congue lacus sem mi netus; egestas consectetur felis. Donec blandit lorem egestas pharetra hac donec in dignissim. Porttitor donec dictum laoreet vitae vestibulum per? Sollicitudin condimentum tristique faucibus magna ultricies hendrerit. Mi fringilla aptent laoreet placerat vel. Consectetur potenti hac bibendum montes elementum suscipit. Ac suspendisse congue justo pretium consectetur justo ligula.

Curae at libero aenean, dui felis phasellus cursus. Pretium egestas torquent maximus himenaeos habitasse augue. Massa class neque rutrum nam etiam turpis integer suspendisse finibus. Tempor maecenas curae pulvinar integer sed varius lacinia purus. Accumsan interdum velit aenean finibus nam taciti nisi. Praesent fames nascetur dolor sapien nam faucibus porttitor justo.

```ts
// Awaited removes the promise
function useSomething(personInfo: Awaited<ReturnType<typeof doSomething>>) {
  console.log(personInfo);
}
```

## Heading 2

Lorem ipsum odor amet, consectetuer adipiscing elit. Ac nascetur mollis ultricies porttitor dictum, torquent lacus sit. Mauris aliquam phasellus rutrum condimentum arcu ipsum. Condimentum nunc venenatis enim etiam suspendisse. Tortor torquent ridiculus lacinia elit potenti suspendisse vestibulum semper consectetur. Fames ligula litora dui habitant orci justo. Donec himenaeos volutpat venenatis lectus fermentum netus.

Turpis pulvinar dignissim aptent proin eu purus sociosqu nulla. Tempus dignissim dui nisl porttitor fermentum adipiscing. Blandit conubia convallis orci class ultrices egestas. Platea egestas fermentum taciti nam gravida. Ligula mus ante gravida dictum dictum est viverra varius torquent? Gravida mi mattis metus mus ligula quam eleifend consequat. Per libero imperdiet netus sagittis pulvinar tempor nunc rhoncus viverra.

Scelerisque nec elementum dolor sociosqu fusce in, cursus lacus etiam. Ultrices torquent ultrices etiam laoreet sagittis venenatis. Malesuada pharetra mauris dignissim mollis sociosqu urna; tincidunt tellus habitant. Duis posuere tempor velit ut nostra. Per proin aptent quam erat euismod dictum. Iaculis aliquet risus mi faucibus vulputate fringilla nostra. Felis dis ac tortor dolor natoque tempus. Aptent donec non; elit justo primis ornare condimentum litora. Molestie posuere nibh fringilla rutrum convallis purus.

Dui nulla sociosqu id porttitor curabitur bibendum neque. Adipiscing praesent mi luctus tristique tempus magnis. Nostra congue lacus sem mi netus; egestas consectetur felis. Donec blandit lorem egestas pharetra hac donec in dignissim. Porttitor donec dictum laoreet vitae vestibulum per? Sollicitudin condimentum tristique faucibus magna ultricies hendrerit. Mi fringilla aptent laoreet placerat vel. Consectetur potenti hac bibendum montes elementum suscipit. Ac suspendisse congue justo pretium consectetur justo ligula.

Curae at libero aenean, dui felis phasellus cursus. Pretium egestas torquent maximus himenaeos habitasse augue. Massa class neque rutrum nam etiam turpis integer suspendisse finibus. Tempor maecenas curae pulvinar integer sed varius lacinia purus. Accumsan interdum velit aenean finibus nam taciti nisi. Praesent fames nascetur dolor sapien nam faucibus porttitor justo.
