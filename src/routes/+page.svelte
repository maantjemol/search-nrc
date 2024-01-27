<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
  export let data;
  import * as Card from "$lib/components/ui/card";
  import type { AudioGuidedRun, NRCData } from "$lib/nrc";
  import { AspectRatio } from "$lib/components/ui/aspect-ratio";

  let runs = data.runs

  let search = ""

  $: runs = data.runs.filter((run: AudioGuidedRun) => {
    return run.landing.title.toLowerCase().includes(search.toLowerCase())
  })
</script>

<section class="lg:mx-48 md:mx-32 sm:mx-16 mx-8 my-24">
  <h1 class="text-4xl font-bold">All runs:</h1>
  <p class="text-lg">This is a list of all runs.</p>
  <Input type="search" placeholder="search..." class="max-w-xs my-2" bind:value={search} />

  <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
    {#each runs as run}
      <Card.Root class="h-min">
        <Card.Header>
          <AspectRatio ratio={16 / 9} class="bg-muted rounded-lg mb-4 overflow-hidden">
            <img src={run.landing.featuredUrl} alt={run.landing.title} class="rounded-lg object-cover" />
          </AspectRatio>
          <Card.Title>{run.landing.title}</Card.Title>
          <Card.Description>{run.landing.subtitle}</Card.Description>
        </Card.Header>
        <Card.Content>
          <Card.Description class="line-clamp-4">{@html run.detail.content[0].body}</Card.Description>
        </Card.Content>
        <Card.Footer>
          <Button href={`/runs/${run.id}`}>More info</Button>
        </Card.Footer>
      </Card.Root>
    {/each}
  </div>
</section>