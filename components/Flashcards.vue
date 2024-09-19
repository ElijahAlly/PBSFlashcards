<script setup lang="ts">
import { ref } from 'vue';
import { Drink } from '@/types/drinks' 

const allDrinks = ref<Drink>([]);

const showAcronymOnFront = ref(true);
const showAcronymOnBack = ref(false);

const showDrinkNameOnFront = ref(true);
const showDrinkNameOnBack = ref(false);

const showInstructionsOnFront = ref(false);
const showInstructionsOnBack = ref(true);

const isShowingBack = ref<{[key: number]: boolean}>({});

onMounted(async () => {
    try {
        const { data: drinks, error }: FetchType = await $fetch('/api/get-all-drinks', {
            method: 'GET',
            params: {
                table: 'drinks',
                select: '*',
            }
        });

        if (error) throw error;

        console.log('all drinks', drinks);
        if (drinks.length > 0) allDrinks.value = drinks;
    } catch (e) {
        console.error(e);
    }
})
</script>

<template>
    <div class="flex flex-col p-3 m-3 overflow-y-auto">
        <div v-for="(drink, i) in allDrinks" :key="i" class="flex flex-col p-3 my-4 border rounded-md" @click="isShowingBack[i] = !isShowingBack[i]">
            <!-- front & back-->
            <h3 class="font-bold" v-if="(!isShowingBack[i] && showDrinkNameOnFront) || isShowingBack[i] && showDrinkNameOnBack">{{ drink.name }}</h3>
            <h3 class="font-bold" v-if="(!isShowingBack[i] && showAcronymOnFront) || isShowingBack[i] && showAcronymOnBack">{{ drink.acronym }}</h3>
            <div class="font-bold" v-if="(!isShowingBack[i] && showInstructionsOnFront) || isShowingBack[i] && showInstructionsOnBack">
                <p v-for="(instruction, i) in drink.instructions" :key="i">{{ instruction }}</p>
            </div>
        </div>
    </div>
</template>