<template>
    <v-card class="mb-4">
        <v-card-title>Column</v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field v-model="name" label="Column Name" />
                <v-select
                v-model="type"
                :items="items"
                label="Type"
                ></v-select>
                <v-btn color="error" @click="onDelete">Delete</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: { index: { type: Number, required: true } },
    data: () => ({
        items: ['String', 'Number']
    }),
    computed: {
        column() {
            return this.$store.getters.column(this.index);
        },
        name: {
            get() {
                return this.column.name;
            },
            set(name) {
                this.$store.dispatch('UPDATE_COLUMN_NAME', { index: this.index, name });
            }
        },
        type: {
            get() {
                return this.column.type;
            },
            set(type) {
                this.$store.dispatch('UPDATE_COLUMN_TYPE', { index: this.index, type });
            }
        }
    },
    methods: {
        onDelete() {
            this.$store.dispatch('DELETE_COLUMN', this.index);
        }
    }
}
</script>