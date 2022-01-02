<script lang="ts">
  import Tailwindcss from './Tailwindcss.svelte'
  import SideBar from './component/SideBar.svelte'
  import StatsCard from './component/StatsCard.svelte'
  import OrderReport from './component/OrderReport.svelte'
  import MostOrdered from './component/MostOrdered.svelte'
  import MostTypeOfOrder from './component/MostTypeOfOrder.svelte'
</script>

<style>

</style>

<Tailwindcss />

<div class="flex w-full min-h-screen font-sans bg-gray-800">
  <SideBar />
  <main class="flex flex-col flex-1 gap-6 p-4">
    <header class="">
      <h1 class="text-3xl font-semibold text-white">DashBoard</h1>
      <div class="text-gray-200 ">tuesday 2 Feb,2021</div>
    </header>
    <hr class="border-gray-700" />
    <StatsCard />
    <OrderReport />
  </main>
  <aside class="flex flex-col gap-y-6 pt-6 pr-6 w-96">
    <MostOrdered />
    <MostTypeOfOrder />
  </aside>

</div>

<svelte:head>
  <!-- elements go here -->
  <title>what a Site</title>
</svelte:head>
