<script lang="ts">
    // your script goes here
    import CoinIcon from './icons/coin.svg'
import OrderIcon from './icons/order.svg'
import CustomerIcon from './icons/customer.svg'
import ArrowUpIcon from './icons/arrow-up.svg'
import ArrowDownIcon from './icons/arrow-down.svg'
const stats= [
    {
    title: 'Total Revenue',
    percentage: '+32.40%',
    value: '$90,243.00',
    status: 'up',
    icon: CoinIcon,
  },
  {
    title: 'Total Dish Ordered',
    percentage: '-10.40%',
    value: '28,456',
    status: 'down',
    icon: OrderIcon,
  },
  {
    title: 'Total Customer',
    percentage: '+21.40%',
    value: '1,234',
    status: 'up',
    icon: CustomerIcon,
  },
]



</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<div class="flex gap-6">
    #{#each stats as stat}
        <div class="flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3">
            <div class="flex items-center gap-x-3">
                <div class="p-2 bg-gray-800 rounded-lg">
                    <svelte:component this={stat.icon}/>
                </div>
                <span class="text-xs font-medium {stat.status==='up' ? ' text-accent-green ': ' text-accent-red '} " >{stat.percentage}</span>
                <div class=" p-0.5 rounded-full {stat.status === 'up' ? ' bg-accent-green/20':' bg-accent-red/20'} ">
                    <ArrowUpIcon class=" {stat.status === 'up' ? ' fill-current text-accent-green' : ' '}"/>
                    <ArrowDownIcon class="  {stat.status==='down' ? ' fill-current text-accent-red ':''}"/>
                </div>
            </div>
            <div class="text-3xl font-semibold text-white">{stat.value}</div>
            <div class="text-sm tracking-wide text-gray-500">{stat.title}</div>
        </div>
    {/each}
</div>

