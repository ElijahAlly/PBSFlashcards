<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue'

const columns = [
    'name',
    'acronym',
    'glasses',
    'alcohol',
    'instructions',
    'found_in_lessons'
];
const values = ref({
    name: '',
    acronym: '',
    glasses: [],
    alcohol: [],
    instructions: [],
    found_in_lessons: [],
});

const isShowingBack = ref(false);

const showAcronymOnFront = ref(true);
const showAcronymOnBack = ref(false);

const showDrinkNameOnFront = ref(true);
const showDrinkNameOnBack = ref(false);

const showInstructionsOnFront = ref(false);
const showInstructionsOnBack = ref(true);

const onCreateDrink = async () => {
    try {
        const { data: drinks, error }: FetchType = await $fetch('/api/create-drink', {
            method: 'POST',
            params: {
                table: 'drinks',
                columns,
                values
            }
        });

        if (error) throw error;

        console.log('all drinks', drinks);
        if (drinks.length > 0) allDrinks.value = drinks;
    } catch (e) {
        console.error(e);
    }
}
</script>

<template>
    <div class="flex flex-col p-3 m-4 border rounded-md w-[42vw] max-w-screen min-w-fit">
        <button @click="isShowingBack = !isShowingBack" class="w-fit self-end">
            <Icon
                name="bubble-loading"
                icon="arcticons:flip-transfer" 
                class="h-12 w-full text-blue-500 hover:text-red-500 transition-colors" 
            />
        </button>
        <input
            class="font-bold"
            v-if="!isShowingBack"
            placeholder="Enter Drink Name e.g. Iced Tea" 
        />
        <input
            class="" 
            v-if="!isShowingBack"
            placeholder="Enter Acronym (optional) e.g. Very Good Rice Takes Time" 
        />
        <div
            class=""
            v-if="isShowingBack"
        >
            <input class="w-full" placeholder="Enter First Step to Instructions e.g. 1/2 oz. Vodka" />
        </div>
        <input v-if="isShowingBack" placeholder="Select glasses used for Drink e.g. Collins" />
        <input v-if="isShowingBack" placeholder="Select which lessons this drink is found in e.g. Lesson 2: Sour Mix Drinks" />
    </div>
</template>